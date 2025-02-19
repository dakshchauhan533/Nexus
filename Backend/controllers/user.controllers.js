import User from "../models/user.model.js";





export const getUserForSidebar = async (req, res) => {
    try {
        const LoggedInUserId = req.user._id;

        const filteredUsers = await User.find({ _id: { $ne: LoggedInUserId } }).select("-password");

        res.status(200).json(filteredUsers

        );

    } catch(error){
        console.log("error in usercontroller ", error.message);
        res.status(500).json({error: "error in usercontroller "});
    }
};