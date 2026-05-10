import dns from "node:dns";
dns.setServers(["1.1.1.1" , "8.8.8.8"])


import app from './app';
import {NODE_ENV, PORT} from "./config/env";
import {connectToDataBase} from "./utils/database";

app.listen(PORT , async (): Promise<void> => {
    try {
        await connectToDataBase()
        console.log("Connected to database")
        console.log(`Environment is ${NODE_ENV}`);
        console.log(`Listening on port ${PORT}`);
    }catch(err: any) {
        console.error(err.message);
    }
});



