import {z} from "zod";

export const UserSignUpZodSchema = z.object({
    email: z.email({error: "Email is required to continue"}).trim(),
    password: z.string({error: "Password is required to continue"}).regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/).trim(),
    firstname: z.string({error: "Name is required to continue"}).min(2).trim(),
    lastname: z.string().trim(),
    role: z.enum(['master_admin', 'tenant_admin', 'customer']),
})

export const UserSignInZodSchema = z.object({
    email: z.email({error: "Email is required to continue"}).trim(),
    password: z.string().trim(),
})

export const RefreshTokenZodSchema = z.object({
    refreshToken: z.string({error: "Refresh token is required"}).trim(),
})