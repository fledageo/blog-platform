import e from "express";
import  user  from "../controllers/userController.js";

export const userRouter = e.Router()

userRouter.post("/registration",user.registration)
userRouter.post("/login",user.login)
userRouter.get("/verify",user.verifyAuth)
userRouter.get("/:id",user.getUserById)

