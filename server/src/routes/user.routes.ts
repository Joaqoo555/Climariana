import { Router } from "express";
import { getAllUsers } from "../controllers/user.controller";
import { isLoggedIn } from "../utils/IsLogIn";

const userRouter = Router();

// Path =>  /users
userRouter.get("/", isLoggedIn, getAllUsers);

export default userRouter;
