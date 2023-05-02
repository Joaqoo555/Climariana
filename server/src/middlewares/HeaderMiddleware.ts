import { NextFunction, Request, Response } from "express";

export const headersConfigurations = (_req:Request, res:Response, next:NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Set-Cookie', 'G_AUTHUSER_H=; SameSite=None; Secure');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Set-Cookie', 'G_AUTHUSER_H=; SameSite=None; Secure');
    next();
  }