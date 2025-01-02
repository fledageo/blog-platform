import axios from "axios";
import { IUserData } from "./types";

const Axios = axios.create({
    baseURL: 'http://localhost:5000/api',
});

export const registration = async (user: IUserData) => {
    console.log(user)
    const response = await Axios.post("/auth/registration",{
        body:{user}
    })
    return response.data
}