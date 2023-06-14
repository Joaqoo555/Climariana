import { Response, Request } from "express";
import db from "../db";
import { HandlerErrorResponse } from "../utils/ErrorCatching";
import { IUserSession } from "../interfaces/user";
  export const getUser = async (_req:Request, res:Response) => {
  
  try {
      const user:IUserSession = await db.User.findOne({
          where: { 
            email: "joaquincarrera2018@gmail.com" 
          }
        });
      console.log(user);
     _req.session.user = user
          
      res.send(_req.session.user)
  } catch (error:any) {
      HandlerErrorResponse(res, error.message, error, 400)
  }
  }


export const getAllUsers = async (_req:Request, res:Response)=> {
    const users = await db.User.findAll()
    console.log(users);
    res.send(_req.session.user)
}
