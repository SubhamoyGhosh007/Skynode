import { connect } from "mongoose";
import { MONGO_URI } from "../config/env";

export const connectToDataBase = async (): Promise<void> => {
    try {
        console.log(("MONGO_URI: " + MONGO_URI))
        if (!MONGO_URI || typeof MONGO_URI !== "string") {
            throw new Error("MongoDB URI must be a string");
        }
        await connect(MONGO_URI);
    } catch (error: unknown) {
        console.error(error);
    }
}
