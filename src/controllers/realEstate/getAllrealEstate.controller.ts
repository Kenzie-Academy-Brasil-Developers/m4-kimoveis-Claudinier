import { Request, Response } from "express";
import { getAllRealEstatesService } from "../../services/realEstate/getAllRealEstate.service";

const getAllRealEstatecontroller = async (req: Request, res: Response): Promise<Response> => {
    const realEstates = await getAllRealEstatesService();  
    return res.status(200).json(realEstates);
};

export {
    getAllRealEstatecontroller
}