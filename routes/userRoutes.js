import express from "express";
import { getCurrentUser } from "../controllers/authController.js";

const router = express.Router();

// User Routes
router.get("/user", getCurrentUser);

export default router;
