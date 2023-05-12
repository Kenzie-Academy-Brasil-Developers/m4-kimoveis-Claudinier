import { Request, Response } from "express";
import { TUserRegister } from "../../interfaces/users.interfaces";
import { createUserService } from "../../services/user/createUser.service";

const createUserController = async (req: Request, res: Response): Promise<Response> => {
    const validUser: TUserRegister = req.body;
    const response = await createUserService(validUser);

    return res.status(201).json(response);
}


export { createUserController };