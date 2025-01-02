import e from "express";
import  auth  from "../controllers/authController.js";

export const authRouter = e.Router()

authRouter.post("/registration",auth.registration)

