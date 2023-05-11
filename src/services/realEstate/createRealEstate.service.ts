import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Address, Category, RealEstate } from "../../entities";
import { TRealEstateRequest, TRealEstateResponse } from "../../interfaces/realEstate.interfaces";
import { addressRegister } from "../../schemas/address.schemas";
import { realEstateSchema } from "../../schemas/realEstate.schemas";

export const createRealEstateService = async (payload: TRealEstateRequest): Promise<TRealEstateResponse> => {
    const realRepo: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);
    const addressRepo: Repository<Address> = AppDataSource.getRepository(Address);
    const categoryRepo: Repository<Category> = AppDataSource.getRepository(Category);

    const address = addressRegister.parse(payload.address);

    const createAddress = addressRepo.create(
        { ...address }
    );

    const newAddress = await addressRepo.save(createAddress);


    const category = await categoryRepo.findOneBy({ id: payload.categoryId });
    const realEstate: TRealEstateRequest = {
        address: newAddress,
        size: payload.size,
        value: payload.value,
        categoryId: payload.categoryId
    }

    const createRealEstate = realRepo.create({ ...realEstate, category: category! });

    const newRealEstate = await realRepo.save(createRealEstate);

    newRealEstate.value = parseFloat(newRealEstate.value.toString());

    const response: TRealEstateResponse = realEstateSchema.parse({ ...newRealEstate, category: category });

    return response;

}