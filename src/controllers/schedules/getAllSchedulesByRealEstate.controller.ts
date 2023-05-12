import { Request, Response } from "express";
import { getAllSchedulesByRealEstateService } from "../../services/schedules/getAllSchedulesByRealEstate.service";

export const getAllSchedulesByRealEstateController =  async (req: Request, res: Response): Promise<Response> => {
    const schedules = await getAllSchedulesByRealEstateService(Number(req.params.id));
    return res.status(200).json(schedules);
}