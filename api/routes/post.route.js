
import express from 'express'
const router = express.Router()

import {protectRoute} from "../middlewares/protectRoute.js"
import {createPost} from "../controllers/post.controller.js"

router.post("/create",protectRoute,createPost)

export default router