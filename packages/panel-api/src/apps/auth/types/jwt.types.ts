export interface JwtPayload {
    userId: string;
    email: string;
    role: string;
    tenantId: string | null;
}

export interface TokenPair {
    accessToken: string;
    refreshToken: string;
}