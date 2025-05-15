
import express from 'express'
const router = express.Router()

import {protectRoute} from "../middlewares/protectRoute.js"
import {createPost,getSlug,getPosts} from "../controllers/post.controller.js"

router.post("/create",protectRoute,createPost)
router.get("/get-post",getPosts)
router.get("/:slug",getSlug)

export default router