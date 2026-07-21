const express = require("express");
const User = require("../models/user.model");
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();

// @route GET /api/admin/users
// @desc Get all users (Admin only)
// @access Private/admin
router.get("/", protect, admin, async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    console.error();
    res.status(500).json({ message: "Server error" });
  }
});

// @route POST /api/admin/users
// @desc add a new user
// @access Private/Admin
router.post("/", protect, admin, async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    let user = await User.findOne({ email });
    // check if user exists
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    // create user
    user = await new User({
      name,
      email,
      password,
      role: role || "customer",
    });

    await user.save();
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    console.error();
    res.status(500).json({ message: "Server error" });
  }
});

// @route PUT api/admin/users/:id
// @desc Update user info
// @access Private/admin
router.put("/:id", protect, admin, async (req, res) => {
  const { name, email, role } = req.body;
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.name = name || user.name;
    user.email = email || user.email;
    user.role = role || user.role;

    const updatedUser = await user.save();
    res
      .status(200)
      .json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// @route DELETE /api/admin/users/:id
// @desc delete a user
// @access private/Admin
router.delete("/:id", protect, admin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      await user.deleteOne();
      res.status(200).json({ message: "User deleted successfuly" });
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});
module.exports = router;
