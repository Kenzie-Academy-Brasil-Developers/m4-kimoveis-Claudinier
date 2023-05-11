import { verify } from "jsonwebtoken";

import "dotenv/config";
import AppError from "../../errors";

const retrieveUserService = (authToken: string) => {
    if (!authToken) {
        throw new AppError('Missing authorization token', 401);
    }

    return verify(
        authToken,
        String(process.env.SECRET_KEY),
        (error: any, decoded: any) => {
            if (error){
                throw new AppError(error.message, 401);
            } 
            return decoded;
        });
}

export default retrieveUserService;