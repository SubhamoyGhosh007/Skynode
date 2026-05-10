import {Error} from "mongoose";

export class ApiError extends Error {
    // @ts-ignore
    public message: string | undefined;
    public statusCode: number;
    public errors: never[];
    public success: boolean;
    public stack: string | undefined;
    public data: any;
    constructor( statusCode: number = 400,message: string , errors: never[] = [] , stack = "") {
        super(message);
        this.errors = errors;
        this.statusCode = statusCode;
        this.success = false;
        this.data = null
        if(stack){
            this.stack = stack;
        }else{
            Error.captureStackTrace(this, this.constructor);
        }
    }
}