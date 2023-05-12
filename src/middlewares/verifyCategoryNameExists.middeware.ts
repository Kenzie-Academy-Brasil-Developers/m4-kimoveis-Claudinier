import { NextFunction, Request, Response } from "express";
import AppError from "../errors";
import { verifyCategoryNameExistsService } from "../services/categories/verifyCategoryNameExists.service";

export const verifyCategoryNameExists = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {

    const exist = await verifyCategoryNameExistsService(req.body.name);


    if (exist) {
        throw new AppError('Category already exists', 409);
    } else {
        return next();
    }


}