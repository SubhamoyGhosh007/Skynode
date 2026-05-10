import { Response } from "express";
import { generateAccessToken, generateRefreshToken, JwtPayload } from "../configs/jwt.config";

export const COOKIE_OPTIONS = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict" as const,
    path: "/",
} as const;

export const setTokensInCookies = (res: Response, accessToken: string, refreshToken: string): void => {
    // Set access token (short-lived, not httpOnly so it can be read by client if needed)
    res.cookie("accessToken", accessToken, {
        ...COOKIE_OPTIONS,
        maxAge: 15 * 60 * 1000, // 15 minutes
    });

    // Set refresh token (long-lived)
    res.cookie("refreshToken", refreshToken, {
        ...COOKIE_OPTIONS,
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });
};

export const clearTokensFromCookies = (res: Response): void => {
    res.clearCookie("accessToken", COOKIE_OPTIONS);
    res.clearCookie("refreshToken", COOKIE_OPTIONS);
};

export const generateTokens = (user: { _id: unknown; email: string; role: string; tenantId: string | null }): {
    accessToken: string;
    refreshToken: string;
} => {
    const payload: JwtPayload = {
        userId: user._id?.toString() || "",
        email: user.email,
        role: user.role,
        tenantId: user.tenantId,
    };

    const accessToken = generateAccessToken(payload);
    const refreshToken = generateRefreshToken(payload);

    return { accessToken, refreshToken };
};