import { Request, Response } from "express";
import { HandlerErrorResponse } from "../utils/ErrorCatching";
import db from "../db";
import { Op } from "sequelize";

export const getAllOrders = async (_req: Request, res: Response) => {
  try {
    const orders = await db.Order.findAll({
      include: {
        model: db.Product,
        through: { attributes: [] }
      }
    })
    return res.send(orders)
  } catch (error: any) {
    return res.status(500).json(HandlerErrorResponse(error.message, error));
  }
};

export const getOrderByUser = async (req: Request, res: Response) => {
  try {
    const { id_user } = req.query;
    const orderUser = await db.Order.findAll({
      where: {
        id_user,
        status: { [Op.ne]: "cart" },
      },
      include: [
        {
          model: db.User,
          attributes: ["id", "name", "email"], // Aquí puedes seleccionar qué campos del modelo User quieres incluir
        },
      ],
    });
    return res.status(200).send(orderUser)
  } catch (error: any) {
    return res.status(500).json(HandlerErrorResponse(error.message, error));
  }
};

export const createOrder = async (req: Request, res: Response) => {
  try {
          const { id_user } = req.query;
          const id_products = req.body
          
          if (!id_products || id_products.length === 0) {
            return res.status(404).json({ error: 'El carrito está vacío.' });
          }
          const newOrder = await db.Order.create({
            id_user,
            status: 'cart',
            mode:"envio"
          });

          await newOrder.addProduct(id_products)
            
          return res.status(201).json({ message: 'La orden se creó exitosamente.' });
      
  } catch (error: any) {
    return res.status(500).json(HandlerErrorResponse(error.message, error));
  }
};

export const deleteOrderById = async (_req: Request, res: Response) => {
  try {
  } catch (error: any) {
    res.status(500).json(HandlerErrorResponse(error.message, error));
  }
};

export const updateOrderStatus = async (_req: Request, res: Response) => {
  try {
  } catch (error: any) {
    res.status(500).json(HandlerErrorResponse(error.message, error));
  }
};
