import "dotenv/config"
import express from 'express'
import cookieParser from "cookie-parser"
import cors from "cors"

const PORT = process.env.PORT
const app = express()
app.use(express.json())
app.use(cookieParser())

app.use(cors({
    origin : process.env.CLIENT_URL,
    credentials : true,
}))

import {connectDb} from "./config/connectDb.js"

import authRoutes from "./routes/auth.route.js"
import userRoutes from "./routes/user.route.js"
import postRoutes from "./routes/post.route.js"
import commentRoutes from "./routes/comment.route.js"

app.use("/api/auth",authRoutes);
app.use("/api/user",userRoutes);
app.use("/api/posts",postRoutes);
app.use("/api/comments",commentRoutes);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.listen(PORT, () => {
    connectDb();
    console.log(`Server is running on port ${PORT}`);
})

