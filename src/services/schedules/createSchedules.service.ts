import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate, Schedule, User } from "../../entities";
import AppError from "../../errors";
import { TSchedules, TSchedulesRegister } from "../../interfaces/schedules.interfaces";
import { schedulesSchema } from "../../schemas/schedules.schemas";

export const createSchedulesService = async (payload: TSchedulesRegister,userId:number): Promise<TSchedules> => {

    const schedulesRepo: Repository<Schedule> = AppDataSource.getRepository(Schedule);
    const usersRepo: Repository<User> = AppDataSource.getRepository(User);
    const realEstateRepo: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);

    const user = await usersRepo.findOneBy({ id:userId });
    const realEstate = await realEstateRepo.findOneBy({ id: payload.realEstateId });

    if (!realEstate) {
        throw new AppError('');
    }

    realEstate.value = parseFloat(realEstate!.value.toString());

    const scheduleRegister = {
        date: payload.date,
        hour: payload.hour,
        realEstate: realEstate!,
        user: user!
    }
    const newSchedule = schedulesRepo.create(scheduleRegister);


    const response: TSchedules = schedulesSchema.parse(newSchedule);


    return response;
}