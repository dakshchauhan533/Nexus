dotenv.config();
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import dotenv from "dotenv";

const protectRoute = async (req, res, next) => {
    try{
        const token = req.cookies.jwt;
        if(!token){
            return res.status(401).json({error: "Unauthorized no token provided"});
        }

        const verified = jwt.verify(token, process.env.JWT_SECRET);
        if(!verified){
            return res.status(401).json({error: "Unauthorized invalid token"});
        }

        const user = await User.findById(verified.userId).select("-password");

        if(!user){
            return res.status(401).json({error: " user not found"});
        }
        req.user = user;
        next()
    }catch(error){
        console.log(error);
        res.status(401).json({error: "internal server error"});
    }
};

export default protectRoute;