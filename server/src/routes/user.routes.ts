import { Router } from "express";
import { getAllUsers } from "../controllers/user.controller";

const userRouter = Router();

// Path =>  /users
userRouter.get("/", getAllUsers);

export default userRouter;
