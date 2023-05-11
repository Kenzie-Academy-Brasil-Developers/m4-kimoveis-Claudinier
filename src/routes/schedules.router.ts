import { Router } from "express";
import { createSchedulesController } from "../controllers/schedules/createSchedules.controller";
import ensurePayloadIsVaild from "../middlewares/ensurePayloadIsVaild.middleware";
import ensureSchedulingIsInBusinessHour from "../middlewares/ensureSchedulingIsInBusinessHours.middlewares";
import ensureSchedulingIsInBusinessHours from "../middlewares/ensureSchedulingIsInBusinessHours.middlewares";
import { validateToken } from "../middlewares/validateToken.middleware";
import { verifyPermissioMiddleware } from "../middlewares/verifyPermission.middleware";
import { schedulesRegisterSchema } from "../schemas/schedules.schemas";

const schedulesRouter: Router = Router();

schedulesRouter.post('/',validateToken,ensurePayloadIsVaild.body(schedulesRegisterSchema),ensureSchedulingIsInBusinessHours,ensureSchedulingIsInBusinessHour,createSchedulesController);
schedulesRouter.get('/',validateToken,verifyPermissioMiddleware);


export default schedulesRouter;