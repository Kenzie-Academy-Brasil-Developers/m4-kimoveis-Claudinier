import { NextFunction, Request, Response } from "express";
import AppError from "../errors";
import { verifyEmailExistsService } from "../services/user/verifyEmailExists.service";




export const verifyEmailExists = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {


    if(req.body.email == "" || req.body.email == undefined){
        return next();
    }

    const exist = await verifyEmailExistsService(req.body.email);


    if (exist) {
        throw new AppError('Email already exists', 409);
    } else {
        return next();
    }


}