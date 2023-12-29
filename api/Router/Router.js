import express from "express";
import { Login } from "../Controllers/AuthController.js";

const router = express();

// routes for admin authentication
router.post("/login", Login);
// router.post("/register", Register);

// route for admin controllers and api's
router.post("/");

export { router as AdminRouter };
