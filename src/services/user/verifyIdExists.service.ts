import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import User from "../../entities/user.entity";

export const  verifyIdExistsService = async (PayloadId: number): Promise<boolean> => {
    const userRepo: Repository<User> = AppDataSource.getRepository(User);

    const exist = await userRepo.exist({where: {id: PayloadId}})
    return exist
}