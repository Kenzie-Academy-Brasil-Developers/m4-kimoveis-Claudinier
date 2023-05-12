import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import { TListRealEstateResponse, TRealEstateRequest } from "../../interfaces/realEstate.interfaces";
import { realEstateSchema } from "../../schemas/realEstate.schemas";

export const getAllRealEstatesService = async (): Promise<TListRealEstateResponse> => {

    const realEstateRepo: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);

    const realEsates = await realEstateRepo.createQueryBuilder('realEsate')
        .leftJoinAndSelect('realEsate.address', 'address')
        .getMany();

    const response: TListRealEstateResponse = realEsates.map(realEstate => {

        realEstate.value = parseFloat(realEstate.value.toString());
        return realEstateSchema.omit({category:true}).parse(realEstate)
    });

    return response;

}