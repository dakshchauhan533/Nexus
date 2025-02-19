import express from "express";

const router = express.Router();
import { login, signup, logout } from "../controllers/auth.controllers.js"; // import the login, signup and logout functions from the auth.controller.js
router.post("/login", login);

router.post("/signup", signup);

router.post("/logout", logout);
export default router; // export the router