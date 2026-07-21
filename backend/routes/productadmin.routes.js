const express = require("express");
const Product = require("../models/product.model");
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();
// @route GET /api/admin/products
// @desc Get all products (Admin only)
// @access Private/admin
router.get("/", protect, admin, async (req, res) => {
  try {
    const products = await Product.find({});
    if (products.length === 0) {
      return res.status(404).json({ message: "No products found" });
    }
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Serve Error" });
  }
});

module.exports = router;
