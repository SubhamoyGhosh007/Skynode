import { z, ZodType, ZodError } from 'zod';
import { ApiError } from "./ApiError";

// Using <T> allows the function to "remember" the schema's shape
export const validateSchema = <T>(schema: ZodType<T>, data: unknown): T => {
    try {
        return schema.parse(data);
    } catch (err) {
        if (err instanceof ZodError) {
            // Join the array into a single string for the main message
            const message = err.issues.map((e:any) => `${e.path.join(".")}: ${e.message}`).join(", ");

            // Throw ApiError to be caught by your asyncHandler
            throw new ApiError(400, message, err.issues as any);
        }
        throw new ApiError(400, "Data validation failed");
    }
};