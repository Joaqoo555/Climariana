import { Router } from "express";
import { createProduct, getAllProducts } from "../controllers/product.controller";

const productRouter = Router();

// Path =>  /products
productRouter.get("/", getAllProducts);
 productRouter.post("/", createProduct)



export default productRouter;
