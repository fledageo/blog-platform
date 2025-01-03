export interface IUserData {
    name?:string
    surname?:string
    email?:string
    password?:string
}
export interface IResponse{
    status:"ok" | "error",
    message:string
}