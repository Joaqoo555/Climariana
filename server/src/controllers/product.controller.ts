import { Request, Response } from "express";
import db from "../db";
import { HandlerErrorResponse } from "../utils/ErrorCatching";
import { IProduct } from "../interfaces/product";

export const getAllProducts = async (req: Request, res: Response)=> {
        try {
            const {id} = req.query
            if(id){
                const product = await db.Product.findByPk(id)
                return res.send(product)
            }else {
                const products = await db.Product.findAll();
                return res.send(products)
            }

        } catch (error:any) {
           return  res.status(404).send(HandlerErrorResponse(error.message, error))
        }
}


export const createProduct = async(_req: Request<{},{}, IProduct>, _res: Response)=> {
   try {
    const newProduct = _req.body;
    const productCreated = await db.Product.create(newProduct)
    _res.status(201).send({message: "Product Created", productCreated})
} catch (error:any) {
    _res.status(404).json(HandlerErrorResponse(error.message, error))
   }
}




export const deleteProduct = async(_req: Request, _res: Response)=> {
    console.log("Obtener productos");
}


export const updateProduct = async(_req: Request, _res: Response)=> {
    console.log("Obtener productos");
}