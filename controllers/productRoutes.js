const express = require("express");
const router = express.Router();

// Import Controller Functions
const { getAllProducts, getProductById } = require("./index");

// Get All Products: /api/products
router.get("/", getAllProducts); // Use the controller from the index file

// Get Specific Product: /api/products/:id
router.get("/:id", getProductById); // Use the controller from the index file

module.exports = router;
