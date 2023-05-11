import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";


export const  verifyCategoryExistsService = async (id: number): Promise<boolean> => {
    const userRepo: Repository<Category> = AppDataSource.getRepository(Category);

    const exist = await userRepo.exist({where: {id: id}})
        
    return exist
}