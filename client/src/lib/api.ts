import axios from "axios";
import { IPost, IResponse, IUserData } from "./types";

const Axios = axios.create({
    baseURL: 'http://localhost:5000/api',
});

export const registration = async (newUser: IUserData):Promise<IResponse> => {
    const response = await Axios.post("/user/registration",newUser)
    return response.data
}
export const login = async (user:IUserData):Promise<IResponse> => {
    const response = await Axios.post("/user/login",user, { withCredentials: true })
    return response.data
}

export const verifyAuth = async () => {
    const response = await Axios.get("/user/verify",{withCredentials:true})
    return response.data
}

export const getAllPosts = async() => {
    const response = await Axios.get("/posts")
    return response.data
}
export const addPost = async (post:IPost):Promise<IResponse> => {
    const response = await Axios.post("/posts/add", post)
    return response.data
}

export const getUserById = async (id:string):Promise<IResponse> => {
    const response = await Axios.get(`/user/${id}`)
    return response.data
}

export const getPostById = async (id:string):Promise<IResponse> => {
    const response = await Axios.get(`/posts/${id}`)
    return response.data
}

export const deletePostById = async(id:string):Promise<IResponse> => {
    const response = await Axios.delete(`/posts/${id}`)
    return response.data
}

export const updateById = async(id:string,update:Partial<IPost>):Promise<IResponse> => {
    const response = await Axios.put(`/posts/${id}`,update)
    return response.data
}
