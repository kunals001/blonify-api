
import express from 'express'
const router = express.Router()

import {protectRoute} from "../middlewares/protectRoute.js"
import {createPost,getPosts,deletePost,uploadAuth,editPost} from "../controllers/post.controller.js"


router.get("/upload-auth",protectRoute,uploadAuth)

router.post("/create",protectRoute,createPost)
router.get("/get-post",getPosts)
router.delete("/delete-post/:postId/:userId",protectRoute,deletePost)
router.put("/edit-post/:postId",protectRoute,editPost)


export default router