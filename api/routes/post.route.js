
import express from 'express'
const router = express.Router()

import {protectRoute} from "../middlewares/protectRoute.js"
import {createPost,getPosts,deletePost,uploadAuth, getSlug,getAllPosts,updatePost,getSinglePost} from "../controllers/post.controller.js"


router.get("/upload-auth",protectRoute,uploadAuth)

router.post("/create",protectRoute,createPost)
router.get("/get-post",getPosts)
router.get("/get-all-posts",getAllPosts)
router.get("/get-single-post/:postId",protectRoute,getSinglePost)
router.put("/update-post/:postId",protectRoute,updatePost)
router.get("/:slug", getSlug);
router.delete("/delete-post/:postId/:userId",protectRoute,deletePost)


export default router