import { Request, Response } from "express";
import { deleteUserService } from "../../services/user/deleteUser.service";


const deleteUserController = async (req: Request, res: Response): Promise<Response> => {
    const userId = Number(req.params.id);
    await deleteUserService(userId);

    return res.status(204).send();
}


export default deleteUserController;