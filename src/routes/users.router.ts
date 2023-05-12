import { Router } from "express";
import { createUserController } from "../controllers/users/createUser.controller";
import deleteUserController from "../controllers/users/deleteUser.controller";
import { getAllUsersController } from "../controllers/users/getAllUsers.controller";
import { updateUserController } from "../controllers/users/updateUser.controller";
import ensurePayloadIsVaild from "../middlewares/ensurePayloadIsVaild.middleware";
import { validateToken } from "../middlewares/validateToken.middleware";
import { verifyEmailExists } from "../middlewares/verifyEmailExists.middeware";
import { verifyIdExists } from "../middlewares/verifyId.middeware";
import { verifyPermissioMiddleware } from "../middlewares/verifyPermission.middleware";
import { verifyPermissionUpdate } from "../middlewares/verifyPermissionUpdate.middlewares";
import { userSchemaRegister, userSchemaUpdateRequest } from "../schemas/user.schemas";

const userRouter: Router = Router();
userRouter.get('/', validateToken, verifyPermissioMiddleware, getAllUsersController);
userRouter.post('/', ensurePayloadIsVaild.body(userSchemaRegister), verifyEmailExists, createUserController);
userRouter.patch('/:id', verifyIdExists, ensurePayloadIsVaild.body(userSchemaUpdateRequest), validateToken, verifyPermissionUpdate, verifyEmailExists, updateUserController);
userRouter.delete('/:id', verifyIdExists, validateToken, verifyPermissioMiddleware, deleteUserController);

export default userRouter;