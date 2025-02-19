import express from "express";
import protectRoute from "../middlewares/protectRoute.js";
import {getUserForSidebar} from "../controllers/user.controllers.js";

const router = express.Router();

router.get("/", protectRoute,getUserForSidebar); // get all users






export default router; // export the router
