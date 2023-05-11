import { Request, Response } from "express";
import { updateUserService } from "../../services/user/updateUser.service";

export const updateUserController = async (req: Request, res: Response): Promise<Response> => {

    const updateUser = await updateUserService(req.body,Number(req.params.id));

    return res.status(200).json(updateUser);
}