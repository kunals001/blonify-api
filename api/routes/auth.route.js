import express from 'express'
const router = express.Router()

import {Signup,VerifyEmail,GoogleSignup,Signin,GoogleSignin,Signout,ForgotPassword,ResetPassword,checkAuth} from "../controllers/auth.controller.js"
import {protectRoute} from "../middlewares/protectRoute.js"


router.get("/check-auth",protectRoute,checkAuth)
router.post("/signup",Signup)
router.post("/verify-email",VerifyEmail)
router.post("/google-signup",GoogleSignup)
router.post("/signin",Signin)
router.post("/google-signin",GoogleSignin)
router.post("/logout",Signout)
router.post("/forgot-password",ForgotPassword)
router.post("/reset-password/:token",ResetPassword)

export default router