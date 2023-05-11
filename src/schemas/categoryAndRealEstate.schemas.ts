import {z} from "zod"
import { realEstatewithoutCategoryAndAddressSchema } from "./realEstate.schemas";

export const categoryResponseSchema = z.object({
    id: z.number(),
    name: z.string().max(45),
    realEstate: realEstatewithoutCategoryAndAddressSchema.array()
})

