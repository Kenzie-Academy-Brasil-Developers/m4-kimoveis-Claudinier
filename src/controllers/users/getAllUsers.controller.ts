import { Request, Response } from "express";
import { getAllUsersService } from "../../services/user/getAllUsers.service";

const getAllUsersController = async (req: Request, res: Response): Promise<Response> => {

    const users = await getAllUsersService();

return res.status(200).json(users);
}


export {
    getAllUsersController
}