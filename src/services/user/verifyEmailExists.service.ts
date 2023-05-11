import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import User from "../../entities/user.entity";

export const  verifyEmailExistsService = async (PayloadEmail: string): Promise<boolean> => {
    const userRepo: Repository<User> = AppDataSource.getRepository(User);

    const exist = await userRepo.exist({where: {email: PayloadEmail}})
        
    return exist
}