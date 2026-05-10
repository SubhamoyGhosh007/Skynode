import { Request, Response, NextFunction } from "express";
import { verifyAccessToken, JwtPayload } from "../configs/jwt.config";
import { ApiError } from "../../../utils/ApiError";
import { asyncHandler } from "../../../utils/asyncHandler";

export interface AuthRequest extends Request {
    user?: JwtPayload;
}

export const authenticate = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        throw new ApiError(401, "Access token is required");
    }

    const token = authHeader.split(" ")[1];

    try {
        const payload = verifyAccessToken(token);
        (req as AuthRequest).user = payload;
        next();
    } catch (error) {
        throw new ApiError(401, "Invalid or expired access token");
    }
});

export const optionalAuth = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return next();
    }

    const token = authHeader.split(" ")[1];

    try {
        const payload = verifyAccessToken(token);
        (req as AuthRequest).user = payload;
    } catch {
        // Token invalid but continue without auth
    }

    next();
});