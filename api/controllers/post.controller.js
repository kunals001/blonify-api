import User from "../models/user.model.js";
import Post from "../models/post.model.js";

export const createPost = async (req, res) => {
    try {
        if (!req.user?.isAdmin) {
            return res.status(403).json({
                success: false,
                message: "Only admins can create posts",
            });
        }

        const user = await User.findById(req.user._id);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        if (!req.body.title) {
            return res.status(400).json({
                success: false,
                message: "Title is required",
            });
        }

        // Slug generation
        const baseSlug = req.body.title.trim().replace(/\s+/g, "-").toLowerCase();
        let slug = baseSlug;
        let counter = 2;

        while (await Post.findOne({ slug })) {
            slug = `${baseSlug}-${counter}`;
            counter++;
        }

        // Creating post object
        const newPost = new Post({
            ...req.body,
            user: user._id,
            slug,
        });

        const post = await newPost.save();

        // Check if post is saved correctly
        if (!post) {
            return res.status(500).json({
                success: false,
                message: "Post not saved",
            });
        }

        return res.status(201).json({
            success: true,
            message: "Post created successfully",
            post, // 👈 Here is your post
        });
    } catch (error) {
        console.error("Error in createPost:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

export const getPosts = (req,res) => {
    try {
        res.status(200).json({success:true,message:"Posts fetched successfully"})
    } catch (error) {
        console.log("error in get posts",error.message);
        res.status(500).json({success:false,message:"Internal Server Error in get posts"})
    }
}

export const getSlug = (req,res) => {
    try {
        res.status(200).json({success:true,message:"Posts fetched successfully"})
    } catch (error) {
        console.log("error in get posts",error.message);
        res.status(500).json({success:false,message:"Internal Server Error in get posts"})
    }
}