import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { fullName, userName, password, confirmPassword, Gender } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Password don't match" });
    }
    const user = await User.findOne({ userName });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    
    // Hash password here
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);

    let boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
    let girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

    const newUser = new User({
      fullName,
      userName,
      password: hashedpassword,
      Gender,
      profilePic: Gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res); // generatetokenandsetcookie
      await newUser.save();

      res
        .status(201)
        .json({
          _id: newUser._id,
          userName: newUser.userName,
          profilePic: newUser.profilePic,
          fullName: newUser.fullName,
        });
    } else {
      res.status(400).json({ error: "invalid user data" });
    }
  } catch (error) {
    console.log("error in the signup controller", error.message);
    res.status(500).json({ error: "error in the signup" });
  }
};

export const login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });
   
    if (!user || !await bcrypt.compare(password, user.password || "")) {
      return res.status(400).json({ error: "Invalid username or password" });
    }
    generateTokenAndSetCookie(user._id, res);

    res
      .status(200)
      .json({
        _id: user._id,
        userName: user.userName,
        profilePic: user.profilePic,
        fullName: user.fullName,
      });
  } catch (error) {
    console.log("error in the login controller", error.message);
    res.status(500).json({ error: "error in the login" });

  }
};

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "logged out successfully" });
  } catch (error) {
    console.log("error in the logout controller", error.message);
    res.status(500).json({ error: "error in the logout" });
    
  }
};
