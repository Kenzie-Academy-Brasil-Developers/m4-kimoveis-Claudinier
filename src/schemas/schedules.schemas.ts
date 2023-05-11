import { z } from "zod";
import { realEstateSchema } from "./realEstate.schemas";
import { userSchema } from "./user.schemas";

const schedulesSchema = z.object({
    id: z.number(),
    date: z.string(),
    hour: z.string(),
    realEstate: realEstateSchema,
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