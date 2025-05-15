export const createPost = (req,res) => {
    try {
        if(!req.user.isAdmin){
            return res.status(400).json({success:false,message:"Only admin can create post"})
        }
        res.status(200).json({success:true,message:"Post created successfully"})
    } catch (error) {
        console.log("error in create post",error.message);
        res.status(500).json({success:false,message:"Internal Server Error in create post"})
    }
}