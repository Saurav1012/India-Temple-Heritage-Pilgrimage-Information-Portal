import User from "../models/User.js";

// Signup
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

    const user = await User.create({
      username,
      password,
    });

    res.status(201).json({
      success: true,
      user,
    });

  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Login
export const login = async (req, res) => {
  try {
    const { password } = req.body;

    // Admin Login
    if (password === "admin123") {
      return res.json({
        success: true,
        username: "admin",
      });
    }

    return res.status(401).json({
      message: "Invalid Password",
    });

  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};