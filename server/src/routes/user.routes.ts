import { Router } from "express";
import { getAllUsers, getUser } from "../controllers/user.controller";

const userRouter = Router();

// Path =>  /users
userRouter.get("/", getAllUsers);

userRouter.get("/one", getUser)

export default userRouter;
