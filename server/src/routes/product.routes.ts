import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
} from "../controllers/product.controller";

const productRouter = Router();

// Path =>  /products
productRouter.get("/", getAllProducts);

productRouter.put("/", updateProduct);
productRouter.post("/", createProduct);
productRouter.delete("/", deleteProduct);

export default productRouter;
