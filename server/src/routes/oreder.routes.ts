import { Router } from "express";
import { createOrder, deleteOrderById, getAllOrders, getOrderByUser, updateOrderStatus } from "../controllers/order.controller";

const orderRouter = Router()


orderRouter.get("/", getAllOrders)
orderRouter.get("/byUser", getOrderByUser)


orderRouter.post("/", createOrder)

orderRouter.delete("/", deleteOrderById)

orderRouter.put("/", updateOrderStatus)

export default orderRouter