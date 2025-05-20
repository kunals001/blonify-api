import Comment from '../models/comment.model.js'
export const createComment = async (req, res) => {
  try {
    const { content, postId, userId } = req.body;

    if (userId !== req.user.id) {
      return res.status(403).json({ success: false, message: "Unauthorized" });
    }

    const newComment = new Comment({
      content,
      postId,
      userId,
      user: userId, 
      post: postId
    });

    await newComment.save();

    res.status(200).json(newComment);
  } catch (error) {
    console.log("error in create comment", error.message);
    res.status(500).json({
      success: false,
      message: "Internal Server Error in create comment",
    });
  }
};

export const getComments = async (req, res) => {
  try {
    const { postId } = req.params;
    console.log("Fetching comments for postId:", postId);

    const comments = await Comment.find({ postId }).sort({ createdAt: -1 }).populate("user");;

    res.status(200).json(comments);
  } catch (error) {
    console.log("error in get comments", error.message);
    res.status(500).json({
      success: false,
      message: "Internal Server Error in get comments",
    });
  }
};

export const getAllComments = async (req, res) => {
  try {
    if (!req.user.isAdmin) {
      return res.status(403).json({ success: false, message: "Unauthorized" });
    }

    const comments = await Comment.find()
      .sort({ createdAt: -1 })
      .populate("user") // Only select name & email
      .populate("post"); // Select required post fields

    res.status(200).json(comments);
  } catch (error) {
    console.log("error in get all comments", error.message);
    res.status(500).json({
      success: false,
      message: "Internal Server Error in get all comments",
    });
  }
};


export const deleteComment = async (req, res) => {
  try {
    const commentId = req.params.commentId; 

    const comment = await Comment.findById(commentId);
    if (!comment) return res.status(404).json({ message: "Comment not found" });

    await Comment.findByIdAndDelete(commentId);

    res.status(200).json({ message: "Comment deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
