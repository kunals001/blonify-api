import express from 'express'
const router = express.Router()

import {protectRoute} from "../middlewares/protectRoute.js"
import {updateProfile} from "../controllers/user.controller.js"

router.put("/update-profile",protectRoute,updateProfile)
// router.put("/update-profile-pic",protectRoute,updateProfilePic)

export default router