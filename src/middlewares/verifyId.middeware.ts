import { NextFunction, Request, Response } from "express";
import AppError from "../errors";
import { verifyIdExistsService } from "../services/user/verifyIdExists.service";





export const verifyIdExists = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {


    const exist = await verifyIdExistsService(Number(req.params.id));


    if (!exist) {
        throw new AppError('User not found', 404);
    } else {
        return next();
    }


}