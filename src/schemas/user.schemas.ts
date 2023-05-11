import { z } from "zod";

const userSchema = z.object({
    id: z.number(),
    name: z.string().max(45, 'String must contain at most 45 character(s)'),
    email: z.string().email().max(45),
    password: z.string().max(120),
    admin: z.boolean().default(false),
    createdAt: z.string(),
    updatedAt: z.string().nullish(),
    deletedAt: z.string().nullish(),
});

const userSchemaRegister = userSchema.omit({
    id: true,
    createdAt: true,
    deletedAt: true,
    updatedAt: true
});

const userSchemaLogin = userSchemaRegister.omit({
    admin: true,
    name: true
})
const userSchemaUpdateRequest = userSchemaRegister.omit({admin:true}).partial();


const userSchemaResponse = userSchema.omit({
    password: true,
});
const userUpdateSchemaResponse = userSchema.omit({
    password: true,
    createdAt: true,
    deletedAt: true,
});





export {
    userSchema,
    userSchemaRegister,
    userSchemaResponse,
    userSchemaUpdateRequest,
    userSchemaLogin,
    userUpdateSchemaResponse
}