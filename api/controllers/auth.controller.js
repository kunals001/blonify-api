import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import transporter from "../mail/nodemailer.js";
import {VERIFICATION_EMAIL_TEMPLATE,PASSWORD_RESET_REQUEST_TEMPLATE} from "../mail/emailTemplet.js";
import {generateToken} from "../utils/generateToken.js";
import crypto from "crypto";

export const Signup = async (req,res) => {
    try {
        const {name,email,password} = req.body;

        if(!name || !email || !password){
            return res.status(400).json({success:false,message:"All fields are required"})
        }

        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if(!emailRegex.test(email)){
            return res.status(400).json({success:false,message:"Invalid email"})
        } 

        if(password.length < 6){
            return res.status(400).json({success:false,message:"Password must be at least 6 characters"})
        }

        const existUser = await User.findOne({email});
        if(existUser){
            return res.status(400).json({success:false,message:"User already exists"})
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const idx = Math.floor(Math.random() * 100) + 1; 
        const randomAvatar = `https://avatar.iran.liara.run/public/${idx}.png`;

        const verificationToken = Math.floor(100000 + Math.random() * 900000);

        const user = await User.create({
            name,
            email,
            password:hashedPassword,
            profilePic:randomAvatar,
            verificationToken,
            verificationTokenExpire:Date.now() + 2 * 60 * 60 * 1000,
        })
        await user.save();

        const info = await transporter.sendMail({
            from: process.env.SENDER_EMAIL, // sender address
            to: user.email, // list of receivers
            subject: "Email verify", // Subject line
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
          });
        
        console.log("Message sent: %s", info.messageId);
        const { password:any, ...userData } = user.toObject();

        res.status(200).json({success:true,data:userData,message:"User created"})
        
    } catch (error) {
        console.log("error in signup",error.message);
        res.status(500).json({success:false,message:"Internal Server Error"})
    }
}

export const VerifyEmail = async (req,res) => {
    try {
        const {code} = req.body;

        const user = await User.findOne({verificationToken:code,verificationTokenExpire:{$gt:Date.now()}});
        if(!user){
            return res.status(400).json({success:false,message:"Invalid verification code"})
        }

        user.isVerified = true;
        user.verificationToken = undefined;
        user.verificationTokenExpiresAt = undefined;
        
        await user.save();
        generateToken(res,user._id);

        const { password:any, ...userData } = user.toObject();
        res.status(200).json({success:true,data:userData,message:"Email verified"})
        
    } catch (error) {
        console.log("error in verify email",error.message);
        res.status(500).json({success:false,message:"Internal Server Error in verify email"})
    }
}

export const GoogleSignup = async (req,res) => {
    try {
        const {email,name,profilePic} = req.body;

        if (!name || !email || name.trim() === "" || email.trim() === "") {
            return res.status(400).json({ success: false, error: "All fields are required" });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, error: "User already exists" });
        }

        const idx = Math.floor(Math.random() * 100) + 1; 
        const randomAvatar = `https://avatar.iran.liara.run/public/${idx}.png`;

        
        const hashedPassword = await bcrypt.hash(email, 10);

        const user = await User.create({
            name,
            email,
            password: hashedPassword, 
            profilePic: profilePic || "" || randomAvatar, 
        });

        
        user.isVerified = true;
        await user.save();

        generateToken(res, user._id);

        const { password, ...userData } = user.toObject(); 
        res.status(200).json({ success: true, user: userData });

    } catch (error) {
        console.log("error in google signup",error.message);
        res.status(500).json({success:false,message:"Internal Server Error in google signup"})
    }
}

export const Signin = async (req,res) => {
    try {
        const {email,password} = req.body;

        if(!email || !password){
            return res.status(400).json({success:false,message:"All fields are required"})
        }

        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({success:false,message:"User not found"})
        }

        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({success:false,message:"Invalid credentials"})
        }

        if(!user.isVerified){
            return res.status(400).json({success:false,message:"Please verify your email"})
        }

        generateToken(res,user._id);
        const { password:any, ...userData } = user.toObject();
        res.status(200).json({success:true,data:userData,message:"User signed in"})
    } catch (error) {
        console.log("error in signin",error.message);
        res.status(500).json({success:false,message:"Internal Server Error in signin"})
    }
}

export const GoogleSignin = async (req,res) => {
    try {
        const {email} = req.body;

        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({success:false,message:"User not found"})
        }
        const isMatch = await bcrypt.compare(email, user.password);
        if(!isMatch){
            return res.status(400).json({ success: false, error: "Invalid credentials" });
        }
        generateToken(res, user._id);
        const { password:any, ...userData } = user.toObject();
        res.status(200).json({ success: true, user: userData });

    } catch (error) {
        console.log("error in google signin",error.message);
        res.status(500).json({success:false,message:"Internal Server Error in google signin"})
    }
}

export const Signout = async (req,res) => {
    try {
        res.clearCookie("token");
        res.status(200).json({success:true,message:"User signed out"})
    } catch (error) {
        console.log("error in signout",error.message);
        res.status(500).json({success:false,message:"Internal Server Error in signout"})
    }
}

export const ForgotPassword = async (req,res) => {
    try {
        const {email} = req.body;

        if(!email){
            return res.status(400).json({success:false, message:"Please enter email"})
        }

        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if(!emailRegex.test(email)){
            return res.status(400).json({success:false, message:"Invalid email"})
        }

        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({success:false, message:"User not found"})
        }

        const randomToken = crypto.randomBytes(20).toString("hex");
        user.resetPasswordToken = randomToken;
        user.resetPasswordTokenExpire = Date.now() + 24 * 60 * 60 * 1000; // 24 hours
        await user.save();

        const info = await transporter.sendMail({
            from: process.env.SENDER_EMAIL, // sender address
            to: user.email, // list of receivers
            subject: "Password Reset", // Subject line
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}",`${process.env.CLIENT_URL}/reset-password/${randomToken}`),
        })
        console.log("Message sent: %s", info.messageId);
        return res.status(200).json({success:true, message:"Password reset email sent successfully", })
    } catch (error) {
        console.log("error in forgot password",error.message)
        res.status(500).json({success: false, message: "Internal server error in forgot password"})
    }
}

export const ResetPassword = async (req,res) => {
    try {
        const {token} = req.params;    
        const {password} = req.body;

        const user = await User.findOne({resetPasswordToken: token,resetPasswordTokenExpire: {$gt: Date.now()}});

        if(!user){
            return res.status(400).json({success:false, message:"Invalid token"})
        }
        const hasedPassword = await bcrypt.hash(password, 10);

        user.password = hasedPassword;
        user.resetPasswordToken = undefined;
        user.resetPasswordTokenExpire = undefined;

        await user.save();
        
        return res.status(200).json({success:true, message:"Password reset successfully", })
    } catch (error) {
        console.log("error in reset password",error.message);
        res.status(500).json({success:false,message:"Internal Server Error in reset password"})
    }
}

export const checkAuth = async (req, res) => {
	try {
		const user = await User.findById(req.user).select("-password");
		if (!user) {
			return res.status(400).json({ success: false, message: "User not found" });
		}

        const { password:any, ...userData } = user.toObject();

		res.status(200).json({ success: true, data:userData });
	} catch (error) {
		console.log("Error in checkAuth ", error);
		res.status(400).json({ success: false, message: error.message });
	}
};