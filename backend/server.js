import express from "express"
import cors from "cors"
import userRouter from "./routes/userRoutes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express()
const PORT = 5000


//middlewares
app.use(express.json());
app.use(cors())

app.get("/" , (req , res)=>{
    res.send("Api Working!")
})

app.use("/api/user" , userRouter)

app.listen(PORT , ()=>{
    console.log(`App is running on port ${PORT}`)
})