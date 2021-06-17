const Product = require("../models/product"); // Get product model

// Router function to get all products
const getAllProducts = async (req, res) => {
	try {
		const products = await Product.find({}); // Use model to get data from database
		res.json(products); // respond with the products data as json
	} catch (error) {
		console.error(error);
		res.status(500).json({ msg: "Server Error" });
	}
};

// Router function to get a single product
const getProductById = async (req, res) => {
	try {
		const product = await Product.findById(req.params.id); // Use model and req.params.id to get the specific product
		res.json(products); // respond with the products data as json
	} catch (error) {
		console.error(error);
		res.status(500).json({ msg: "Server Error" });
	}
};

module.exports = {
	getAllProducts,
	getProductById
};
