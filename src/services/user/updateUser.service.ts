import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { TUpdateUser, TUserResponse } from "../../interfaces/users.interfaces";
import { userSchemaResponse } from "../../schemas/user.schemas";

export const updateUserService = async (user: TUpdateUser, userId: number): Promise<TUserResponse> => {
    const usersRepo: Repository<User> = AppDataSource.getRepository(User);

    await usersRepo.createQueryBuilder().update(User).set({
        ...user,
    }).where('id = :id', { id: userId }).execute();

    const updatedUser = await usersRepo.findOneBy({ id: userId });
    let response = userSchemaResponse.parse(updatedUser);


    return response;
};