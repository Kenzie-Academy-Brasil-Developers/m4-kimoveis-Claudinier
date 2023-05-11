import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { TCategoryRegister, TCategoryResponse } from "../../interfaces/categories.interfaces";
import { Category } from "../../entities";

export const createCategoryService = async (category: TCategoryRegister): Promise<TCategoryResponse> => {


    const usersRepo: Repository<Category> = AppDataSource.getRepository(Category);
    const createCategory: TCategoryRegister = usersRepo.create(category);
    const newCategory: TCategoryResponse = await usersRepo.save(createCategory);


    return newCategory;

}