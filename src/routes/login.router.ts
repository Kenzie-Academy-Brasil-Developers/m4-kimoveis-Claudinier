import { Router } from "express";
import { createSessionController } from "../controllers/users/createSession.controller";
import ensurePayloadIsVaild from "../middlewares/ensurePayloadIsVaild.middleware";
import { userSchemaLogin } from "../schemas/user.schemas";

const loginRouter: Router = Router();

loginRouter.post('/', ensurePayloadIsVaild.body(userSchemaLogin),createSessionController);


export default loginRouter;