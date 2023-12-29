import express from "express";

const router = express();

// routes for admin authentication
router.post("/login");

// route for admin controllers and api's
router.post('/')

export { router as AdminRouter };
