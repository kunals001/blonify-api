import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema(
  {
    user:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    post:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
    content: {
      type: String,
      required: true,
    },
    postId: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;