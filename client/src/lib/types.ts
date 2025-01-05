export interface IUserData {
    _id?:string
    name?:string
    surname?:string
    email?:string
    password?:string
}
export interface IResponse{
    status:"ok" | "error",
    message?:string
    payload?:any
}

export interface IPost {
    _id?:string
    title:string
    content:string
    author:IUserData
    timestamp:Date
}