import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { RealEstate } from "../entities";
import AppError from "../errors";

const ensureRealEstateExistsByIdMiddlewares = async (req: Request, res:Response, next: NextFunction) =>{

    const realEstateRepository : Repository<RealEstate> = AppDataSource.getRepository(RealEstate);
    const realEstateId: number = Number(req.body.realEstateId) || Number(req.params.id);

    const realEstate = await realEstateRepository.exist({where : {id: realEstateId}});

    if(!realEstate){
        throw new AppError("RealEstate not found", 404);
    }
    return next();
    


}
export default ensureRealEstateExistsByIdMiddlewares