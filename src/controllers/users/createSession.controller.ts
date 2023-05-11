import { Request, Response } from "express";
import { createSession } from "../../services/session/createSession.services";



const createSessionController = async (req: Request, res: Response): Promise<Response> => {
    const response = await createSession(req.body);


    return res.status(200).json({token:response});
}


export { createSessionController };