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