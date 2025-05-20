import express from 'express'
const router = express.Router()

import {protectRoute} from "../middlewares/protectRoute.js"
import {createComment,getComments,deleteComment,getAllComments} from "../controllers/comment.controller.js"

router.post("/send",protectRoute,createComment)
router.get("/get-comments/:postId",getComments)
router.get("/get-all-comments",protectRoute,getAllComments)
router.delete("/delete-comment/:commentId",protectRoute,deleteComment)

export default router