import e from "express";
import { authRouter } from "./authRoutes.js"; 

export const mainRouter = e.Router()

mainRouter.use("/auth",authRouter)  