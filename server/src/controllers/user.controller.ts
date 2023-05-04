import { Response, Request } from "express";
import db from "../db";

export const getAllUsers = async (_req:Request, res:Response)=> {
    const users = await db.User.findAll()
    console.log(users);
    res.send()
}
