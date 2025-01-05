import e from "express";
import post from "../controllers/postController.js";
export const postRouter = e.Router()

postRouter.post("/add",post.addPost)
postRouter.get("/", post.getAllPosts)

