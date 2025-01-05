import { createAction } from "@reduxjs/toolkit";
import { IPost } from "../../lib/types";

export const setAllPosts = createAction<IPost[]>("posts/getAllPosts")