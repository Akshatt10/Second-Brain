import { NextFunction, Request, Response } from "express";
import { JWT_SECRET } from "../config";
import {jwt} from "jsonwebtoken";

export const userMiddlware = (req: Request, res: Response, nest: NextFunction) => {
    const header = req.headers["authorization"];
    const decoded = jwt.verify(header, JWT_SECRET);
    
}
