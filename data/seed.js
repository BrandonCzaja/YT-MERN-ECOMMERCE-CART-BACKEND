require("dotenv").config(); // Bring in .env variables
const productData = require("./index"); // Bring in sample data
const connectDB = require("../database/db.js"); // Database connection
const Product = require("../models/product.js"); // Product Model

connectDB(); // Connect to Database

// Import Data - Async because I am working with the database
const importData = async () => {
	try {
		await Product.deleteMany({}); // Clear old data from database
		await Product.insertMany(productData); // Add fresh sample data
		console.log("Data Import Successful");
		process.exit(); // This script is only for importing, it doesn't need to run all day. That is why I am exiting
	} catch (err) {
		{
			console.error(`Error Importing Data: ${err}`);
			process.exit(1);
		}
	}
};

importData(); // When this file is called I want to run the data import immediately, so I call it here
