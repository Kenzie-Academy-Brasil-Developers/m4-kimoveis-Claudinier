import { z } from "zod";
import { userSchema } from "./user.schemas";

const schedulesSchema = z.object({
    id: z.number(),
    date: z.string(),
    hour: z.string(),
    user: userSchema
});

const schedulesRegisterSchema = z.object({
    date: z.string(),
    hour: z.string(),
    realEstateId: z.number()
})

export {
    schedulesSchema,
    schedulesRegisterSchema
}