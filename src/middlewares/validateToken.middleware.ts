
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import "dotenv/config";
import AppError from "../errors";
import retrieveUserService from "../services/session/retrivieveUser.services";



const validateToken = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {

    const authorization: string | undefined = req.headers.authorization;

    if (authorization == undefined) {
        throw new AppError('Missing bearer token', 401);
    }
    const [_bearer, token] = authorization.split(' ');

    const decoded = retrieveUserService(token);

    res.locals.userValidated = decoded;

    next();
}

export {
    validateToken
};