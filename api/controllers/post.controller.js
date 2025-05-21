import User from "../models/user.model.js";
import Post from "../models/post.model.js";
import ImageKit from "imagekit";
import 'dotenv/config'

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
            userId: user._id,
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

export const getPosts = async (req,res) => {
    try {

        const startIndex = parseInt(req.query.startIndex) || 0;
        const limit = parseInt(req.query.limit) || 20;
        const sortDirection = req.query.order === "asc" ? 1 : -1;

        const posts = await Post.find({
      ...(req.query.userId && { userId: req.query.userId }),
      ...(req.query.category && { category: req.query.category }),
      ...(req.query.slug && { slug: req.query.slug }),
      ...(req.query.postId && { _id: req.query.postId }),
      ...(req.query.searchTerm && {
        $or: [
          { title: { $regex: req.query.searchTerm, $options: 'i' } },
          { content: { $regex: req.query.searchTerm, $options: 'i' } },
        ],
      }),
    })
      .sort({ updatedAt: sortDirection })
      .skip(startIndex)
      .limit(limit);

    const totalPosts = await Post.countDocuments();

    const now = new Date();

    const oneMonthAgo = new Date(
      now.getFullYear(),
      now.getMonth() - 1,
      now.getDate()
    );

    const lastMonthPosts = await Post.countDocuments({
      createdAt: { $gte: oneMonthAgo },
    });


    res.status(200).json({
      posts,
      totalPosts,
      lastMonthPosts,
    });
    
    } catch (error) {
        console.log("error in get posts",error.message);
        res.status(500).json({success:false,message:"Internal Server Error in get posts"})
    }
}
export const getAllPosts = async (req, res) => {
    try {
         const post = await Post.find().sort({ createdAt: -1 });
         res.status(200).json(post);
    } catch (error) {
        console.log("error in get posts",error.message);
        res.status(500).json({success:false,message:"Internal Server Error in get posts"})
    }
 
};
export const getSlug = async (req, res) => {
  const post = await Post.findOne({ slug: req.params.slug })
  res.status(200).json(post);
};

export const deletePost = async(req,res) => {
    try {
        
        if (!req.user?.isAdmin || req.user.id !== req.params.userId) {
            return res.status(403).json({
                success: false,
                message: "Only admins can delete posts",
            });
        }

        const post = await Post.findByIdAndDelete(req.params.postId);

        if(!post){
            return res.status(404).json({success:false,message:"Post not found"})
        }

        res.status(200).json({success:true,message:"Posts Deleted successfully"})
    } catch (error) {
        console.log("error in get posts",error.message);
        res.status(500).json({success:false,message:"Internal Server Error in get posts"})
    }
}

export const uploadAuth = async (req, res) => {
    const imagekit = new ImageKit({
        urlEndpoint: process.env.IK_URL_ENDPOINT,
        publicKey: process.env.IK_PUBLIC_KEY,
        privateKey: process.env.IK_PRIVATE_KEY,
    });

    try {
        const result = imagekit.getAuthenticationParameters();

        res.status(200).json({
    success: true,
    message: "Upload auth successful",
    signature: result.signature,
    expire: result.expire,
    token: result.token,
    publicKey: process.env.IK_PUBLIC_KEY,
});

    } catch (error) {
        console.error("Error in uploadAuth:", error.message);
        res.status(500).json({
            success: false,
            message: "Internal Server Error in uploadAuth",
        });
    }
};