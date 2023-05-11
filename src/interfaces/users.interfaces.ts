import { DeepPartial } from 'typeorm';
import { z } from 'zod'
import { userSchema, userSchemaLogin, userSchemaRegister, userSchemaResponse, userSchemaUpdateRequest, userUpdateSchemaResponse } from '../schemas/user.schemas'
type TUser = z.infer<typeof userSchema>;
type TUserRegister = z.infer<typeof userSchemaRegister>;
type TUserUpdateRequest =  z.infer<typeof userSchemaUpdateRequest>;
interface IUserUpdate {
    name: string;
    email: string;
    password: string;
}
type TUpdateUser = DeepPartial<IUserUpdate>;
type TUserResponse = z.infer<typeof userSchemaResponse>;
type TUserUpdateResponse = z.infer<typeof userUpdateSchemaResponse>;
type TUserLogin = z.infer<typeof userSchemaLogin>;


export{
    TUser,
    TUserRegister,
    TUserUpdateRequest,
    TUserResponse,
    TUserLogin,
    TUpdateUser,
    TUserUpdateResponse
}