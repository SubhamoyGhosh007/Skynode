export class ApiResponse {
    public message: string;
    public statusCode: number;
    public data: any;
    public  success: boolean;
    constructor(statusCode: number = 200 , message: string = 'Response',  data?: any,  success: boolean = true, ) {
        this.statusCode = statusCode;
        this.message = message;
        this.data = data || {};
        this.success = success
    }
}