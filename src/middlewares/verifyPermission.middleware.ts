import { NextFunction, Request, Response } from "express";
import AppError from "../errors";
import { TUser } from "../interfaces/users.interfaces";

const verifyPermissioMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {

    const user: TUser = res.locals.userValidated;

    if (user.admin == false) {
        throw new AppError('Insufficient permission', 403);
    }


    return next();
}

export {
    verifyPermissioMiddleware
}