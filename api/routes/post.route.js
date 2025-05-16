
import express from 'express'
const router = express.Router()

import {protectRoute} from "../middlewares/protectRoute.js"
import {createPost,getSlug,getPosts,deletePost,uploadAuth} from "../controllers/post.controller.js"


router.get("/upload-auth",protectRoute,uploadAuth)
router.post("/create",protectRoute,createPost)
router.get("/get-post",getPosts)
router.get("/:slug",getSlug)
router.delete("/delete-post/:id",protectRoute,deletePost)


export default router