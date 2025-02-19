dotenv.config();
import express from "express";
import dotenv from "dotenv";

const PORT = process.env.PORT ;
import cookieParser from "cookie-parser";
import AuthRoutes from "./Routes/auth.Routes.js";
import messageRoutes from "./Routes/message.Routes.js";
import userRoutes from "./Routes/user.Routes.js";
import connectDB from "./db/connectDB.js";
import cors from "cors";
import path from "path";
import {server,app} from "./socket/socket.js";


const __dirname = path.resolve();




app.use(express.json()); // to parse the incoming request with JSON payloads
app.use(cookieParser()); // to parse the incoming cookies
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
})); // to enable cross-origin resource sharing

app.use("/api/auth", AuthRoutes); // using the AuthRoutes
app.use("/api/messages", messageRoutes); // using the messageRoutes
app.use("/api/users", userRoutes); // using the userRoutes

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

// app.get("/", (req, res) => {
//     res.send("root route");
// }); // root route http://localhost:3000/

server.listen(PORT, () => {
    connectDB();
    console.log('Server is running on port ' + PORT);
});