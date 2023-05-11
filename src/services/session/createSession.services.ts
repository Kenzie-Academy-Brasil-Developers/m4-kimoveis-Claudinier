
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import "dotenv/config";
import { userSchema } from "../../schemas/user.schemas";
import AppError from "../../errors";
import { TUserLogin } from "../../interfaces/users.interfaces";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { Repository } from "typeorm";

const createSession = async (payload: TUserLogin): Promise<String | any> => {

    const { email, password } = payload;

    const userRepo: Repository<User> = AppDataSource.getRepository(User);

    const user = await userRepo.createQueryBuilder().where("email = :emailUser", { emailUser: email }).getOne();

    if (user === undefined) {
        throw new AppError("Invalid credentials", 401);
    }
    
    if(!user){
        throw new AppError("Invalid credentials", 401);
    }
    
  
    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
        throw new AppError("Invalid credentials", 401);
    }

    if (user?.deletedAt) {
        throw new AppError("Invalid credentials", 401);
    }

    const userValidated =  userSchema.parse(user);

    const token = sign({
        admin: userValidated.admin,
    },
        String(process.env.SECRET_KEY),
        {
            subject: String(userValidated.id)
        }
    );

    return token;
}

export {
    createSession
}