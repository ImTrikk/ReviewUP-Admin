import express from "express";
import { Login, Logout } from "../Controllers/AuthController.js";
import { CourseCounter } from "../Controllers/CourseModuleController.js";

const router = express();

// routes for admin authentication
router.post("/login", Login);
router.delete("/logout/:id", Logout);

// route for admin controllers and api's
router.get("/count-reviewers", CourseCounter);

export { router as AdminRouter };
