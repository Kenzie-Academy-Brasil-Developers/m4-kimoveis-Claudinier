import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { TUserResponse } from "../../interfaces/users.interfaces";
import { userSchemaResponse } from "../../schemas/user.schemas";

export const getAllUsersService = async (): Promise<TUserResponse[]> => {

    const usersRepo: Repository<User> = AppDataSource.getRepository(User);

    const users = await  usersRepo.createQueryBuilder().getMany();

    const response: TUserResponse[] = users.map(user => userSchemaResponse.parse(user));

    return response;

}