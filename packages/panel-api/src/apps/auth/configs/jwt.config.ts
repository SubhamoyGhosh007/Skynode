import jwt from "jsonwebtoken";

export const JWT_CONFIG = {
    accessToken: {
        secret: process.env.JWT_ACCESS_SECRET || "your-super-secret-access-key-change-in-production",
        expiresIn: "15m", // 15 minutes
    },
    refreshToken: {
        secret: process.env.JWT_REFRESH_SECRET || "your-super-secret-refresh-key-change-in-production",
        expiresIn: "7d", // 7 days
    },
} as const;

export interface JwtPayload {
    userId: string;
    email: string;
    role: string;
    tenantId: string | null;
}

export const generateAccessToken = (payload: JwtPayload): string => {
    return jwt.sign(payload, JWT_CONFIG.accessToken.secret, {
        expiresIn: JWT_CONFIG.accessToken.expiresIn,
    });
};

export const generateRefreshToken = (payload: JwtPayload): string => {
    return jwt.sign(payload, JWT_CONFIG.refreshToken.secret, {
        expiresIn: JWT_CONFIG.refreshToken.expiresIn,
    });
};

export const verifyAccessToken = (token: string): JwtPayload => {
    return jwt.verify(token, JWT_CONFIG.accessToken.secret) as JwtPayload;
};

export const verifyRefreshToken = (token: string): JwtPayload => {
    return jwt.verify(token, JWT_CONFIG.refreshToken.secret) as JwtPayload;
};