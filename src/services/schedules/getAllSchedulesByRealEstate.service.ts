import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { RealEstate, Schedule } from "../../entities"
import { iScheduleResponse } from "../../interfaces/schedules.interfaces";


export const getAllSchedulesByRealEstateService = async (id: number): Promise<iScheduleResponse> => {
    const scheduleRepo: Repository<Schedule> = AppDataSource.getRepository(Schedule);
    const realRepo: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);

    const schedules = await scheduleRepo.createQueryBuilder('schedules')
        .leftJoinAndSelect('schedules.user', 'user')
        .innerJoin('schedules.realEstate', 'realEstate')
        .where('realEstate.id = :realID', { realID: id })
        .getMany();

    const realEstate = await realRepo.createQueryBuilder('realEstate')
        .innerJoinAndSelect('realEstate.category', 'category')
        .innerJoinAndSelect('realEstate.address', 'address')
        .where('realEstate.id = :realID', { realID: id })
        .getOne();


    const newObj: iScheduleResponse = {
        ...realEstate!,
        schedules: schedules!
    }


    return newObj;









}