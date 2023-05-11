import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import User from "../../entities/user.entity";
import { TUserRegister, TUserResponse } from "../../interfaces/users.interfaces";
import { userSchemaResponse } from "../../schemas/user.schemas";

export const createUserService = async (user: TUserRegister): Promise<TUserResponse> => {

    const usersRepo: Repository<User> = AppDataSource.getRepository(User);
    const createUser: TUserRegister = usersRepo.create(user);
    const newUser = await usersRepo.save(createUser);

    const response = userSchemaResponse.parse(newUser);

    return response;

}