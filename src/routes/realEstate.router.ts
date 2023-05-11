import { Router } from "express";
import { createRealEstateController } from "../controllers/realEstate/createRealEstate.controller";
import { getAllRealEstatecontroller } from "../controllers/realEstate/getAllrealEstate.controller";
import { ensureAddressIsUnique } from "../middlewares/ensureAddressIsUnique.middleware";
import ensurePayloadIsVaild from "../middlewares/ensurePayloadIsVaild.middleware";
import { validateToken } from "../middlewares/validateToken.middleware";
import { verifyPermissioMiddleware } from "../middlewares/verifyPermission.middleware";
import { realEstateSchemaRequest } from "../schemas/realEstate.schemas";

const realEstateRouter: Router = Router();

realEstateRouter.post('/', validateToken, verifyPermissioMiddleware, ensurePayloadIsVaild.body(realEstateSchemaRequest), ensureAddressIsUnique, createRealEstateController);
realEstateRouter.get('/', getAllRealEstatecontroller);


export default realEstateRouter;