import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const updateProfile = async (req, res) => {
  try {
    const { name, password } = req.body;

    const updateData = {};

    if (name) updateData.name = name;
    if (password) {
      const hashedPassword = bcrypt.hashSync(password, 10);
      updateData.password = hashedPassword;
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      updateData,
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.status(200).json({
      success: true,
      data: updatedUser,
      message: "Profile updated successfully",
    });
  } catch (error) {
    console.error("Error in updateProfile:", error.message);
    res.status(500).json({
      success: false,
      message: "Internal Server Error in update profile",
    });
  }
};

export const getUsers = async (req, res) => {
  if(req.user.isAdmin === false){
    res.status(403).json({ success: false, message: "You are not allowed to access this page" });
  }
  try {
    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit = parseInt(req.query.limit) || 10;
    const sortDirection = req.query.sort === "asc" ? 1 : -1;

    const users = await User.find()
      .sort({ createdAt: sortDirection })
      .skip(startIndex)
      .limit(limit);

     const usersWithoutPassword = users.map((user) => {
      const { password, ...rest } = user._doc;
      return rest;
    });

    const totalUsers = await User.countDocuments();

    const now = new Date();

    const oneMonthAgo = new Date(
      now.getFullYear(),
      now.getMonth() - 1,
      now.getDate()
    );
    const lastMonthUsers = await User.countDocuments({
      createdAt: { $gte: oneMonthAgo },
    });

    res.status(200).json({
      users: usersWithoutPassword,
      totalUsers,
      lastMonthUsers,
    });
    
  } catch (error) {
    console.error("Error in getUser:", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const deleteUser = async (req, res) => {
  const { userId, adminId } = req.params;

  try {
    const admin = await User.findById(adminId);
    if (!admin || !admin.isAdmin) {
      return res.status(403).json({ success: false, message: "Unauthorized access" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    await User.findByIdAndDelete(userId);

    res.status(200).json({ success: true, message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};


// export const updateProfilePic = async (req, res) => {
//   try {
//     const { profilePic } = req.body;

//     if (!profilePic) {
//       return res.status(400).json({
//         success: false,
//         message: "Profile picture is required",
//       });
//     }

//     // req.user._id middleware se set hona chahiye (jaise verifyToken me)
//     const userId = req.user._id;

//     const updatedUser = await User.findByIdAndUpdate(
//       userId,
//       { profilePic },
//       { new: true }
//     );

//     if (!updatedUser) {
//       return res.status(404).json({
//         success: false,
//         message: "User not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: "Profile picture updated successfully",
//       data: updatedUser,
//     });

//   } catch (error) {
//     console.error("Error in updateProfilePic:", error.message);
//     res.status(500).json({
//       success: false,
//       message: "Internal Server Error",
//     });
//   }
// };