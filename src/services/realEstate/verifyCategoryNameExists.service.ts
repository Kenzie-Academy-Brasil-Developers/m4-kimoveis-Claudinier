import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";


export const  verifyCategoryNameExistsService = async (PayloadName: string): Promise<boolean> => {
    const userRepo: Repository<Category> = AppDataSource.getRepository(Category);

    const exist = await userRepo.exist({where: {name: PayloadName}})
        
    return exist
}