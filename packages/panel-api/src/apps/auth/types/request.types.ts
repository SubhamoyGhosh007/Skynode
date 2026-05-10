export interface SignUpRequest {
    email: string;
    password: string;
    firstname: string;
    lastname?: string;
    role?: 'master_admin' | 'tenant_admin' | 'customer';
}

export interface SignInRequest {
    email: string;
    password: string;
}

export interface RefreshTokenRequest {
    refreshToken: string;
}

export interface SignOutRequest {
    // Currently no body required - uses cookies
}