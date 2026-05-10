import {Document} from "mongoose";

interface IUserMethods {
    isPasswordValid(password: string): Promise<boolean>;
}

export interface IUser extends Document, IUserMethods {
    tenantId: string | null;
    email: string;
    passwordHash: string;
    name: string;
    role: string;
    status: string;
    emailVerified: boolean;
    lastLoginAt: Date;
    avatarUrl?: string;
}