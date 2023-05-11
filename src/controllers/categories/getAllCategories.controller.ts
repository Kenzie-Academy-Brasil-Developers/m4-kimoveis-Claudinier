import { Request, Response } from "express";
import { getAllCategoriesService } from "../../services/categories/getAllCategories.service";

const getAllCategoriescontroller = async (req: Request, res: Response): Promise<Response> => {

    const categories = await getAllCategoriesService();
    return res.status(200).json(categories);

};

export {
    getAllCategoriescontroller
}