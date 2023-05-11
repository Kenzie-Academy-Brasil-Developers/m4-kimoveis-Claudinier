import { NextFunction, Request, Response } from "express";
import AppError from "../errors";
import { TUser } from "../interfaces/users.interfaces";

const verifyPermissionUpdate = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {


    
    
    const user = res.locals.userValidated;
    
    const id = Number(req.params.id);


    if (user.sub == id) {
        return next();
    }

    if (user.admin == false) {
        throw new AppError('Insufficient permission', 403);
    }


    return next();
}

export {
    verifyPermissionUpdate
}