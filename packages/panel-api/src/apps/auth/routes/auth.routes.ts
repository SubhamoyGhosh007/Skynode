import {Router, Request, Response} from "express";
import {ApiResponse} from "../../../utils/ApiResponse";
import {userSignOut, userSignUp, userSignIn, refreshAccessToken} from "../controller";
import {authenticate} from "../middlewares/auth.middleware";


const authRoutes: Router = Router();

// Not Protected Routes
authRoutes.post('/sign-up', userSignUp);
authRoutes.post('/sign-up/:tenantId', userSignUp);

authRoutes.post('/sign-in', userSignIn);
authRoutes.post('/sign-in/:tenantId', userSignIn);

authRoutes.post('/refresh-token', refreshAccessToken);


// Protected Routes
authRoutes.post('/sign-out', authenticate, userSignOut);

export default authRoutes;