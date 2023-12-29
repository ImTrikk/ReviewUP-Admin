import express from "express";
import { Login } from "../Controllers/AuthController.js";
import { CourseCounter } from "../Controllers/CourseModuleController.js";

const router = express();

// routes for admin authentication
router.post("/login", Login);


// route for admin controllers and api's
router.get("/count-reviewers", CourseCounter);

export { router as AdminRouter };
