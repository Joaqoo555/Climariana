import { Router } from "express";
import productRouter from "./product.routes";
import userRouter from "./user.routes";

const indexRouter = Router();


indexRouter.use('/products', productRouter);
indexRouter.use('/users', userRouter);


export default indexRouter