import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import 'dotenv/config';

export const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.token;

        if(!token){
            return res.status(401).json({success:false,message:"Not Authorized"})
        }

        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const user = await User.findById(decoded.userId);

        if(!user){
            return res.status(401).json({success:false,message:"Not authorized"})
        }

        req.user = user;
        next();
    } catch (error) {
        console.log("error in protect route",error.message);
        res.status(500).json({success:false,message:"Internal Server Error in protect route"})
    }
}