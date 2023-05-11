import { Request, Response } from "express";
import { getCategoryAndRealEstateService } from "../../services/categories/getCategoryAndRealEstate.service";

const getCategorycontroller = async (req: Request, res: Response): Promise<Response> => {

    const categoryAndRealEstate = await getCategoryAndRealEstateService(Number(req.params.id));


    return res.status(200).json(categoryAndRealEstate);

};

export {
    getCategorycontroller
}