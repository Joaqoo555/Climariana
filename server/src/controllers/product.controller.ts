import { Request, Response } from "express";
import db from "../db";
import { HandlerErrorResponse } from "../utils/ErrorCatching";
import { IProduct, IPostProduct } from "../interfaces/product";

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const { id } = req.query;
    if (id) {
      const product: IProduct = await db.Product.findByPk(id);
      if (product === null) throw new Error("No se encontro el producto");
      return res.send(product);
    } else {
      const products: IProduct[] = await db.Product.findAll();
      return res.send(products);
    }
  } catch (error: any) {
    return HandlerErrorResponse(res, error.message, error, 404);
  }
};

export const createProduct = async (
  req: Request<{}, {}, IPostProduct>,
  res: Response
) => {
  try {
    const newProduct = req.body;
    const productCreated = await db.Product.create(newProduct);
    return res.status(201).send({ message: "Product Created", productCreated });
  } catch (error: any) {
    return HandlerErrorResponse(res, error.message, error, 404);
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.query;
    if (id) {
      await db.Product.destroy({
        where: {
          id,
        },
      });
      return res.send("Producto Eliminado");
    } else {
      throw new Error("No se ingreso el Producto a eliminar");
    }
  } catch (error: any) {
    return HandlerErrorResponse(res, error.message, error, 404);
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const upgradeProduct: IProduct = req.body;
    const { id } = req.query;
    const [numberOfAffectedRows, affectedRows] = await db.Product.update(
      {
        ...upgradeProduct,
      },
      {
        where: { id },
        returning: true,
      }
    );
    if (numberOfAffectedRows === 0) {
      throw new Error(`El Producto no pudo actualizarse ${upgradeProduct.id}`);
    }
    return res.status(200).json(affectedRows[0]);
  } catch (error: any) {
    return HandlerErrorResponse(res, error.message, error, 404);
  }
};
