import { Request, Response, NextFunction } from 'express';
import {ApiResponse} from "./ApiResponse";
import {ApiError} from "./ApiError";
import {ZodError} from "zod";

export const asyncHandler = (fn: Function) => async (req : Request, res: Response, next: NextFunction) => {
    try{
        await fn(req, res,next)
    }catch(err: any){
        console.log('error in asyncHandler', err.message);
        if (err instanceof ApiError){
            res
                .status(err.statusCode || 400)
                .json(
                    new ApiResponse(err.statusCode || 400,  err.message || 'Something went wrong' , null,false)
                )
        }else if(err instanceof ZodError){
            res
            .status( 400)
            .json(
                new ApiResponse( 400,  "Validation error" ,null, false)
            )
        }else if(err.code === 11000){
            res
                .status(400)
                .json(
                    new ApiResponse(400, "Duplicate key found" ,null, false)
                )
        }
        else{
            res
                .status(500)
                .json(new ApiResponse(500, 'Internal Server Error', null, false))
        }

    }
}