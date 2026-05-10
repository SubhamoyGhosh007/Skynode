export interface AuthTokens {
    accessToken: string;
    refreshToken: string;
}

export interface UserResponse {
    id: string;
    email: string;
    name: string;
    role: string;
    tenantId?: string | null;
}

export interface SignInResponse {
    user: UserResponse;
    accessToken: string;
    refreshToken: string;
}

export interface SignUpResponse extends SignInResponse {}

export interface RefreshTokenResponse {
    accessToken: string;
    refreshToken: string;
}

export interface ErrorResponse {
    message: string;
    errors?: string[];
    statusCode: number;
}

export interface SignOutResponse {
    message: string;
}