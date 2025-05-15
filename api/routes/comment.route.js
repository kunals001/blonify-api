import express from 'express'
const router = express.Router()

import {protectRoute} from "../middlewares/protectRoute.js"
import {createComment} from "../controllers/comment.controller.js"

router.post("/send",protectRoute,createComment)

export default router