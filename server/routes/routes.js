import e from "express";
import { userRouter } from "./userRoutes.js"; 
import { postRouter } from "./postRoutes.js";

export const mainRouter = e.Router()

mainRouter.use("/user",userRouter)  
mainRouter.use("/posts",postRouter)  