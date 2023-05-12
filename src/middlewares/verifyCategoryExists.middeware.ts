import { NextFunction, Request, Response } from "express";
import AppError from "../errors";
import { verifyCategoryExistsService } from "../services/categories/verifyCategoryExists.service";

export const verifyCategoryExists = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {

    const exist = await verifyCategoryExistsService(Number(req.params.id));


    if (exist) {
        return next();
    } else {
        throw new AppError('Category not found', 404);
    }


}