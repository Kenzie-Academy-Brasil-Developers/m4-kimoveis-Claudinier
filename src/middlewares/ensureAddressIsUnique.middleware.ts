import { NextFunction, Request, Response } from "express";
import AppError from "../errors";
import { ensureAddressIsUniqueService } from "../services/realEstate/ensureAddressIsUnique.service";

export const ensureAddressIsUnique = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {


    const exist = await ensureAddressIsUniqueService(req.body.address);


    if (exist) {
        throw new AppError('Address already exists', 409);
    } else {
        return next();
    }


}