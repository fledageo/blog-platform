import User from "../models/User.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const JWT_SECRET = "secret-key"


class AuthController {
    async registration(req, res) {
        const userData = req.body
        try {
            const found = await User.findOne({ email: userData.email }) //?

            if (found) {
                res.send({ status: "error", message: "This email is already registered" })
            } else {
                const user = new User({
                    ...userData,
                    password: await bcrypt.hash(userData.password, 8)
                })
                user.save()
                res.send({ status: "ok", message: "Registration successful" })
            }
        } catch (error) {
            console.log(error)
        }
    }
    async login(req, res) {
        const userData = req.body

        const found = await User.findOne({ email: userData.email })

        if (found) {
            const isValidPassword = await bcrypt.compare(userData.password, found.password)
            if (isValidPassword) {
                const token = jwt.sign({userId:found._id},JWT_SECRET,{expiresIn:"60m"})
                res.cookie('token', token, {
                    maxAge: 60 * 60 * 1000,
                });
                res.send({status:"ok",message:"Successfuly"})
            } else {
                res.send({ status: "error", message: "Password is not valid" })
            }
        } else {
            res.send({ status: "error", message: "Email is not valid" })
        }
    }
    async verifyAuth(req,res) {
        const token = req.cookies.token
        if(!token){
            return res.send({status:"error",message:"Access denied!"})
        }
        
        try {   
            jwt.verify(token,JWT_SECRET)
            res.send({status:"ok",message:"Access allowed"})

        } catch (error) {
            res.clearCookie("token")
            res.send({status:"error",message:"Access denied!"})
        }
    }
}
export default new AuthController()
