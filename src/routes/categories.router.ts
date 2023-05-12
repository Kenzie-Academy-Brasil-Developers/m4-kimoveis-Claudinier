import { Router } from "express";
import { createCategoryController } from "../controllers/categories/createCategory.controller";
import { getAllCategoriescontroller } from "../controllers/categories/getAllCategories.controller";
import { getCategorycontroller } from "../controllers/categories/getCategory.controller";
import ensurePayloadIsVaild from "../middlewares/ensurePayloadIsVaild.middleware";
import { validateToken } from "../middlewares/validateToken.middleware";
import { verifyCategoryExists } from "../middlewares/verifyCategoryExists.middeware";
import { verifyCategoryNameExists } from "../middlewares/verifyCategoryNameExists.middeware";
import { verifyPermissioMiddleware } from "../middlewares/verifyPermission.middleware";
import { categorySchemaRegister } from "../schemas/category.schemas";


const categoriesRouter: Router = Router();


categoriesRouter.post('/',validateToken,verifyPermissioMiddleware,ensurePayloadIsVaild.body(categorySchemaRegister),verifyCategoryNameExists,createCategoryController);
categoriesRouter.get('/',getAllCategoriescontroller);
categoriesRouter.get('/:id/realEstate',verifyCategoryExists,getCategorycontroller);


export default categoriesRouter;