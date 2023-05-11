import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { TCategoryResponse } from "../../interfaces/categories.interfaces";
import { categorySchema } from "../../schemas/category.schemas";
export const getAllCategoriesService = async (): Promise<TCategoryResponse[]> => {

    const categoriesRepo: Repository<Category> = AppDataSource.getRepository(Category);

    const categories = await  categoriesRepo.createQueryBuilder().getMany();

    const response: TCategoryResponse[] = categories.map(categorie => categorySchema.parse(categorie));

    return response;

}