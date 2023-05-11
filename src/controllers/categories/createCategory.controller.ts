import { Request, Response } from "express";
import { createCategoryService } from "../../services/categories/createCategory.service";

const createCategoryController = async (req: Request, res: Response): Promise<Response> => {

    const createCategory = await createCategoryService(req.body);

    return res.status(201).json(createCategory);

};

export {
    createCategoryController
}