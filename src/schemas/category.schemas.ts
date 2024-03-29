import {z} from "zod";

const categorySchema = z.object({
    id: z.number(),
    name: z.string().max(45)
});

const categorySchemaRegister = categorySchema.omit({id: true});

export {
    categorySchema,
    categorySchemaRegister,
    
}