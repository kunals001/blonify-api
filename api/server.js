import "dotenv/config"
import express from 'express'
import cookieParser from "cookie-parser"

const PORT = process.env.PORT
const app = express()
app.use(express.json())
app.use(cookieParser())

import {connectDb} from "./config/connectDb.js"

import authRoutes from "./routes/auth.route.js"

app.use("/api/auth",authRoutes);

app.listen(PORT, () => {
    connectDb();
    console.log(`Server is running on port ${PORT}`);
})

