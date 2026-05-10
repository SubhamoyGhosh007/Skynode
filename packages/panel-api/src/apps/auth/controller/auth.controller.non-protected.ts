import {Request, Response} from "express";
import {z} from 'zod'

import {ApiResponse} from "../../../utils/ApiResponse";
import {User} from "../database/user.db"
import {Tenant} from "../../../database/tenant.db";
import {UserSignUpZodSchema, UserSignInZodSchema, RefreshTokenZodSchema} from "../zod/user.zod";
import {asyncHandler} from "../../../utils/asyncHandler";
import {ApiError} from "../../../utils/ApiError";
import {generateTokens, setTokensInCookies, clearTokensFromCookies} from "../utils/token.utils";
import {verifyRefreshToken} from "../configs/jwt.config";
import { publishWelcomeEmail } from "../../../utils/kafka/email.producer";

export const userSignUp =  asyncHandler(async(req: Request, res: Response) => {
    const user_validated_data = z.parse(UserSignUpZodSchema, req.body)
    console.log('validated data', user_validated_data)
    let tenantId = null
    if(req.params.tenantId){
        tenantId = req.params.tenantId as string
    }
    console.log('tenantId', tenantId)

    // Check if user already exists
    const existingUser = await User.findOne({ email: user_validated_data.email, tenantId });
    if (existingUser) {
        throw new ApiError(409, "User with this email already exists");
    }

    const user = await User.create({
        tenantId: tenantId,
        email: user_validated_data.email,
        passwordHash: user_validated_data.password,
        name: `${user_validated_data.firstname} ${user_validated_data.lastname}`,
        role: user_validated_data.role,
        status: "active",
        emailVerified: false
    })

    const savedUser = await User.findById((user._id))
    if(!savedUser){
        throw new ApiError(400, "User not found")
    }

    // Generate tokens and set cookies
    const tokens = generateTokens(savedUser);
    setTokensInCookies(res, tokens.accessToken, tokens.refreshToken);

    // Publish welcome email to Kafka (LOW priority)
    await publishWelcomeEmail(
      user._id.toString(),
      user.email,
      user.name,
      "LOW"
    );

    // Todo: Sign In the user or redirect them to another path.

    // Sending Response
    res
        .status(201)
        .json(
            new ApiResponse(201, 'User Created Successfully' , {
                user: {
                    id: user._id,
                    email: user.email,
                    name: user.name,
                    role: user.role,
                },
                accessToken: tokens.accessToken,
                refreshToken: tokens.refreshToken,
            } )
        )
})

export const userSignIn = asyncHandler(async(req: Request, res: Response) => {
    const user_validated_data = z.parse(UserSignInZodSchema, req.body)
    console.log('validated data', user_validated_data)

    const user = await User.findOne({
        email: user_validated_data.email,
    }).select("+passwordHash");

    if(!user){
        throw new ApiError(401, "Invalid email or password")
    }

    if (user.status === "suspended" || user.status === "banned") {
        throw new ApiError(403, "Your account is suspended or banned");
    }

    const isPasswordValid = await user.isPasswordValid(user_validated_data.password)
    if(!isPasswordValid){
        throw new ApiError(401, "Invalid email or password")
    }

    // Generate tokens and set cookies
    const tokens = generateTokens(user);
    setTokensInCookies(res, tokens.accessToken, tokens.refreshToken);

    res
        .status(200)
        .json(
            new ApiResponse(200, 'Sign in successful', {
                user: {
                    id: user._id,
                    email: user.email,
                    name: user.name,
                    role: user.role,
                },
                accessToken: tokens.accessToken,
                refreshToken: tokens.refreshToken,
            })
        )
})

export const userSignOut = asyncHandler(async(req: Request, res: Response) => {
    clearTokensFromCookies(res);

    res
        .status(200)
        .json(
            new ApiResponse(200, 'Sign out successful', null)
        )
})

export const refreshAccessToken = asyncHandler(async(req: Request, res: Response) => {
    // Get refresh token from body or cookies
    let refreshToken = req.body.refreshToken || req.cookies?.refreshToken;

    if (!refreshToken) {
        throw new ApiError(400, "Refresh token is required");
    }

    const validatedData = z.parse(RefreshTokenZodSchema, { refreshToken });
    refreshToken = validatedData.refreshToken;

    try {
        const payload = verifyRefreshToken(refreshToken);

        // Find user to ensure they still exist and are active
        const user = await User.findById(payload.userId);

        if (!user) {
            throw new ApiError(401, "User not found");
        }

        if (user.status === "suspended" || user.status === "banned") {
            throw new ApiError(403, "Your account is suspended or banned");
        }

        // Generate new tokens
        const tokens = generateTokens(user);
        setTokensInCookies(res, tokens.accessToken, tokens.refreshToken);

        res
            .status(200)
            .json(
                new ApiResponse(200, 'Token refreshed successfully', {
                    accessToken: tokens.accessToken,
                    refreshToken: tokens.refreshToken,
                })
            );
    } catch (error) {
        throw new ApiError(401, "Invalid or expired refresh token");
    }
});