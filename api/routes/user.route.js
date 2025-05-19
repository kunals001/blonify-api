import express from 'express'
const router = express.Router()

import {protectRoute} from "../middlewares/protectRoute.js"
import {updateProfile,getUsers,deleteUser} from "../controllers/user.controller.js"

router.put("/update-profile",protectRoute,updateProfile)
router.get("/get-users",protectRoute,getUsers)
router.delete("/delete-user/:userId/:adminId",protectRoute,deleteUser)

export default router