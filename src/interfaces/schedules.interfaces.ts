import { z } from "zod";
import { schedulesRegisterSchema, schedulesSchema } from "../schemas/schedules.schemas";

type TSchedulesRegister = z.infer<typeof schedulesRegisterSchema>;
type TSchedules = z.infer<typeof schedulesSchema>;


export{
    TSchedulesRegister,
    TSchedules
}