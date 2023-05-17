import db from "../db";
import { Op } from "sequelize";
import { TStatus } from "../interfaces/orders";
import { Response } from "express";
import { HandlerErrorResponse } from "../utils/ErrorCatching";

export const findOrderStatusCart = async (
  id_user: string,
  status: TStatus | undefined,
  res: Response
) => {
  try {
    if (!status) {
      const orderUser = await db.Order.findAll({
        where: {
          id_user,
        },
        include: [
          {
            model: db.User,
            attributes: ["id", "name", "email"], // here you can select the atributes of the model "Product"
          },
        ],
      });
      return orderUser;
    }
    const orderUser = await db.Order.findAll({
      where: {
        id_user,
        status: { [Op.ne]: status },
      },
      include: [
        {
          model: db.User,
          attributes: ["id", "name", "email"], // here you can select the atributes of the model "Product"
        },
      ],
    });
    return orderUser;
  } catch (error: any) {
    return HandlerErrorResponse(res, error.message, error, 500);
  }
};
