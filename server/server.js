import express from "express";
import mongoose from "mongoose";
import { mainRouter } from "./routes/routes.js";
import cors from "cors"
const PORT = process.env.PORT | 5000

const app = express()

app.use(express.json())
// app.use()

app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}))
app.use('/api', mainRouter)


const start = async() => {
    try {
        mongoose.connect("mongodb+srv://fledage:fledage123@blog-cluster.5dsz5.mongodb.net/?retryWrites=true&w=majority&appName=blog-cluster")
        app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}

start()
