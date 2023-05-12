import { Request, Response } from "express";

const getRealEstatecontroller = async (req: Request, res: Response): Promise<Response> => {
    return res.status(200).json();
};

export {
    getRealEstatecontroller
}