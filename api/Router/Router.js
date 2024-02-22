import express from "express";
import {
	ForgotPassword,
	Login,
	Logout,
} from "../Controllers/AuthController.js";
import { CourseCounter } from "../Controllers/CourseModuleController.js";
import { CheckOtp, SendOtp } from "../Middleware/OneTimePassword.js";

const router = express();

// routes for admin authentication
router.post("/login", Login);
router.delete("/logout/:id", Logout);

//router for admin forgot password
router.get("/forgot-password", SendOtp);
router.post("/check-otp", CheckOtp, ForgotPassword);

// route for admin controllers and api's
router.get("/count-reviewers", CourseCounter);

export { router as AdminRouter };
