import {  Router } from "express";
import productRouter from "./product.routes";
import userRouter from "./user.routes";
import passport from "passport";
import orderRouter from "./oreder.routes";

const indexRouter = Router();

indexRouter.use(
  "/auth",
  passport.authenticate("auth-google", {
    scope: [
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/userinfo.profile",
    ],
    session: false,
    //TODO usar las variables de entorno
    //http://localhost:3000/home
    
    successRedirect: "http://localhost:3000/home",
    failureRedirect: "http://localhost:3000/google/error",
  }));

indexRouter.use("/products", productRouter);
indexRouter.use("/users", userRouter);
indexRouter.use("/orders", orderRouter);

export default indexRouter;
