import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// ==========================
// Signup
// ==========================
export const signup = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        message: "Username and Password required",
      });
    }

    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      password: hashedPassword,
    });

    res.status(201).json({
      success: true,
      message: "Signup Successful",
    });

  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// ==========================
// Login
// ==========================
export const login = async (req, res) => {

  try {

    const { username, password } = req.body;

    // Admin Login

    if (username === "admin" && password === "admin123") {

      const token = jwt.sign(
        {
          username: "admin",
          role: "admin",
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "7d",
        }
      );

      return res.json({
        success: true,
        token,
        username: "admin",
        role: "admin",
      });
    }

    const user = await User.findOne({
      username,
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const matched = await bcrypt.compare(
      password,
      user.password
    );

    if (!matched) {
      return res.status(401).json({
        message: "Incorrect Password",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        username: user.username,
        role: "user",
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.json({
      success: true,
      token,
      username: user.username,
      role: "user",
    });

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }

};