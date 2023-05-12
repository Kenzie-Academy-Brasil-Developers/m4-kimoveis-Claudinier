import { Request, Response } from "express";
import { TSchedules } from "../../interfaces/schedules.interfaces";
import { createSchedulesService } from "../../services/schedules/createSchedules.service";

export const createSchedulesController = async (req: Request, res: Response): Promise<Response> => {
    const userId = res.locals.userValidated.sub;
    const schedules: string = await createSchedulesService(req.body,userId);

    return res.status(201).json({message:schedules});
}
