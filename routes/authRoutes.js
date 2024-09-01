import express from "express";
import passport from "passport";
import { googleAuth, logoutUser } from "../controllers/authController.js";

const router = express.Router();

// Google Authentication Routes
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  googleAuth
);

// Logout Route
router.get("/logout", logoutUser);

export default router;
