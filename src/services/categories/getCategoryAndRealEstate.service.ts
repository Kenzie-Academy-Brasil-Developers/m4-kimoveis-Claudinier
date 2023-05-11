import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category, RealEstate } from "../../entities";
import { categoryResponseSchema } from "../../schemas/categoryAndRealEstate.schemas";
export const getCategoryAndRealEstateService = async (idCategory: number) => {

    const categoriesRepo: Repository<Category> = AppDataSource.getRepository(Category);
    const realEstateRepo: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);
    const category = await categoriesRepo.findOneBy({ id: idCategory });

    const realEstate = await realEstateRepo.findBy({ category: category! })

    const newRealEstates = realEstate.map(real => {
        real.value = parseFloat(real.value.toString());
        return real;
    })
    const response = categoryResponseSchema.parse({ ...category, realEstate: newRealEstates });
    return response;

}