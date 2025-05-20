import express from 'express'
const router = express.Router()

import {protectRoute} from "../middlewares/protectRoute.js"
import {createComment,getComments,deleteComment} from "../controllers/comment.controller.js"

router.post("/send",protectRoute,createComment)
router.get("/get-comments/:postId",getComments)
router.delete("/delete-comment/:commentId",protectRoute,deleteComment)

export default router