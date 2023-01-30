import express from "express";
import User from "../models/user.js";
import bcrypt from "bcrypt";
//import { generateToken } from "../helpers/authenticationHelper.js";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ email: user.email, id: user._id }, "test", {
      expiresIn: "1h",
    });
    res.status(200).json({ result: user, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Path: backend/routes/userRoutes.js

export const profile = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Path: backend/routes/userRoutes.js

export const register = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  const user = await User.findOne({ email });
  const hashedPassword = await bcrypt.hash(password, 12);
  if (!user) {
    const newUser = await new User({
      email,
      password: hashedPassword,
      firstName,
      lastName,
    }).save();
    res.json({ message: "User created successfully" });
  } else {
    res.json({ message: "User already exists" });
  }
};

export const logout = async (req, res) => {
  res.json({ message: "User logged out" });
};
