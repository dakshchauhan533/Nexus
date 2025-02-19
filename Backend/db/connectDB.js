dotenv.config();
import mongoose from 'mongoose';
import dotenv from 'dotenv';
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGOURL);
        console.log("Database connected successfully");
    } catch (error) {
        console.log("error message",error);
    }
}

export default connectDB;