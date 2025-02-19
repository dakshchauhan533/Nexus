import express from "express";
import {sendMessage,getMessages} from "../controllers/message.controllers.js"; // import the sendMessage function from the message.controllers.js
import protectRoute from "../middlewares/protectRoute.js"; // import the protectRoute function from the protectRoute.js
const router = express.Router();

// ROUTES FOR RECIEVING AND SENDING MESSAGES

router.get("/:id",protectRoute,getMessages); // get message
router.post("/send/:id",protectRoute,sendMessage); // send message
 



export default router; // export the router