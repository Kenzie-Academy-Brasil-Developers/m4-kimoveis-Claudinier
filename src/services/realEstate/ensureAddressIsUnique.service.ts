import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Address } from "../../entities";

export const ensureAddressIsUniqueService = async (payload: any): Promise<boolean> => {

    const addressRepo: Repository<Address> = AppDataSource.getRepository(Address);

    const exists = await addressRepo.exist({where:{city : payload.city, state: payload.state, number: payload.number}});

    return exists;

}