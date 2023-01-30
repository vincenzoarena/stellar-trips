import express from "express";
import { login, logout, profile, register } from "../controllers/user.js";

const router = express.Router();

router.post("/login", login);

router.get("/profile/:id", profile);

router.post("/register", register);

router.get("/logout", logout);

export default router;
