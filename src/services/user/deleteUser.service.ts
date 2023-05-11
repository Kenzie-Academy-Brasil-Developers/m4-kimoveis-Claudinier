import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";

export const deleteUserService = async (userId: number): Promise<void> => {

    const usersRepo: Repository<User> = AppDataSource.getRepository(User);

    await  usersRepo.createQueryBuilder().softDelete().where("id = :id",{id: userId}).execute()

    return;

}