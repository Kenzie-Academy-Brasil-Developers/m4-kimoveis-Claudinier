import { NextFunction, Request, Response } from "express"
import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { Schedule } from "../entities"
import AppError from "../errors"

const ensureAppointmentExistsMiddleware = async (req: Request, res: Response, next: NextFunction) => {

    const { date, hour } = req.body;
    const scheduleRepository: Repository<Schedule> = AppDataSource.getRepository(Schedule);
    const userId = Number(res.locals.userValidated.sub);

    const schedulesExists = await scheduleRepository.exist({
        where: {
            date: date,
            hour: hour
        }
    });

    if (!schedulesExists) {
        return next()
    } else {
        const schedule = await scheduleRepository.createQueryBuilder('schedules')
            .innerJoinAndSelect('schedules.user', 'user')
            .leftJoinAndSelect('schedules.realEstate', 'realEstate')
            .getOne();            

        if (schedule?.user.id === userId) {
            throw new AppError("User schedule to this real estate at this date and time already exists", 409)
        }

        if (schedulesExists === true) {
            throw new AppError("Schedule to this real estate at this date and time already exists", 409)
        }

    }


}
export default ensureAppointmentExistsMiddleware