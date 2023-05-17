import { Request, Response } from "express";
import { HandlerErrorResponse } from "../utils/ErrorCatching";
import db from "../db";
import { IBodyPostOrder, IQueryGetOrderByUser } from "../interfaces/orders";
import { findOrderStatusCart } from "../middlewares/FindOrderStatusCart";

export const getAllOrders = async (_req: Request, res: Response) => {
  try {
    const orders = await db.Order.findAll({
      include: {
        model: db.Product,
        through: { attributes: [] },
        attributes: ["id", "title", "price"], // here you can select the atributes of the model "Product"
      }
    })
    return res.send(orders)
  } catch (error: any) {
    return HandlerErrorResponse(res, error.message, error, 500)
  }
};

export const getOrderByUser = async (req: Request<{},{},{},IQueryGetOrderByUser>, res: Response) => {
  try {
    const { id_user, status } = req.query;
    const ordersOfUser = await findOrderStatusCart(id_user, status, res)
    return res.status(200).send(ordersOfUser)
  } catch (error: any) {
    return HandlerErrorResponse(res, error.message, error, 500);
  }
};

export const createOrder = async (req: Request<{},{},IBodyPostOrder>, res: Response) => {
  try {
          const { id_user } = req.query;
          const orderInfo = req.body
          if(id_user) throw new Error("No se ingreso un usuario correcto")
          //Verificamos que posea productos en La orden que se envia desde el frontEnd
          for (let i = 0; i < orderInfo.Products.length; i++) {
            if (!orderInfo.Products[i] || orderInfo.Products.length === 0) {
              throw new Error("No se encuentran productos en el carrito")
            } 
          }
          //queantity se calcula desde el front pra mostrar el valor en vivo del carrito por medio de un setState
          const newOrder = await db.Order.create({
           ...orderInfo, id_user
          });

          const PRODUCTS_ID =  orderInfo.Products.map((product_id)=> product_id)
          await newOrder.addProduct(PRODUCTS_ID)
          return res.status(201).json({ message: 'La orden se creó exitosamente.' });
      
  } catch (error: any) {
    return HandlerErrorResponse(res, error.message, error, 500)
  }
};

export const deleteOrderById = async (_req: Request, res: Response) => {
  try {
  } catch (error: any) {
     HandlerErrorResponse(res, error.message, error, 500)
  }
};

//TODO Cuando se actualiza al estado de compra realizada, se deberia de restar el stock del producto
export const updateOrderStatus = async (_req: Request, res: Response) => {
  try {
  } catch (error: any) {
     HandlerErrorResponse(res, error.message, error, 500)
  }
};
