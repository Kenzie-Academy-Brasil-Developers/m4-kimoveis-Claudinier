import { z } from "zod";
import { Address, Category, Schedule } from "../entities";
import { schedulesRegisterSchema, schedulesSchema } from "../schemas/schedules.schemas";

type TSchedulesRegister = z.infer<typeof schedulesRegisterSchema>;
type TSchedules = z.infer<typeof schedulesSchema>;

interface iScheduleResponse {
    schedules: Schedule[];
    id: number;
    sold: boolean;
    value: string | number;
    size: number;
    createdAt: string | Date;
    updatedAt: string | Date;
    address: Address;
    category: Category;
}

export{
    TSchedulesRegister,
    TSchedules,
    iScheduleResponse
}