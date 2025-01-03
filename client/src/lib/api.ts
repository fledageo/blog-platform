import axios from "axios";
import { IResponse, IUserData } from "./types";

const Axios = axios.create({
    baseURL: 'http://localhost:5000/api',
});

export const registration = async (newUser: IUserData):Promise<IResponse> => {
    const response = await Axios.post("/auth/registration",newUser)
    return response.data
}
export const login = async (user:IUserData):Promise<IResponse> => {
    const response = await Axios.post("/auth/login",user, { withCredentials: true })
    return response.data
}

export const verifyAuth = async () => {
    const response = await Axios.get("/auth/verify",{withCredentials:true})
    return response.data
}