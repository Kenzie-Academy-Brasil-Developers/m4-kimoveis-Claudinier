import { categorySchema, categorySchemaRegister } from "../schemas/category.schemas";
import {z} from "zod";

type TCategoryResponse = z.infer<typeof categorySchema>;
type TCategoryRegister = z.infer<typeof categorySchemaRegister>;


export{
    TCategoryResponse,
    TCategoryRegister
}