import { Router } from "express";
import { createSchedulesController } from "../controllers/schedules/createSchedules.controller";
import { getAllSchedulesByRealEstateController } from "../controllers/schedules/getAllSchedulesByRealEstate.controller";
import ensureAppointmentExistsMiddleware from "../middlewares/ensureAppointmentExists.middleware";
import ensurePayloadIsVaild from "../middlewares/ensurePayloadIsVaild.middleware";
import ensureRealEstateExistsByIdMiddlewares from "../middlewares/ensureRealEstateExistsById.middleware";
import ensureSchedulingIsInBusinessHours from "../middlewares/ensureSchedulingIsInBusinessHours.middlewares";
import ensureThatSchedulingIsOnOneBusinessDay from "../middlewares/ensureThatSchedulingIsOnOneBusinessDay.middleware";
import { validateToken } from "../middlewares/validateToken.middleware";
import { verifyPermissioMiddleware } from "../middlewares/verifyPermission.middleware";
import { schedulesRegisterSchema } from "../schemas/schedules.schemas";

const schedulesRouter: Router = Router();

schedulesRouter.post('/', validateToken, ensurePayloadIsVaild.body(schedulesRegisterSchema),
    ensureSchedulingIsInBusinessHours,
    ensureThatSchedulingIsOnOneBusinessDay,
    ensureRealEstateExistsByIdMiddlewares,
    ensureAppointmentExistsMiddleware,
    createSchedulesController);
schedulesRouter.get('/realEstate/:id', validateToken, verifyPermissioMiddleware,ensureRealEstateExistsByIdMiddlewares,getAllSchedulesByRealEstateController);


export default schedulesRouter;