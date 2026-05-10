import express , {Express} from "express";
import cors from "cors";
import cookieParser from "cookie-parser"
import {API_VERSION} from "./config/env";
import authRoutes from "./apps/auth/routes/auth.routes";

const app:Express = express();

// Built in middlewares
app.use(cors({
    origin: "*",
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.static("public"))

const path = `/api/${API_VERSION}`;
console.log('Path: ', path)

// Middlewares
app.use(`${path}/auth` , authRoutes) // Redirect to Auth Services

export default app;