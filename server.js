require("dotenv").config(); // Bring in .env variables
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const productRoutes = require("./controllers/productRoutes");

// Connect DB from Database Folder
const connectDB = require("./database/db.js");
connectDB();

// Middleware
app.use(express.json()); // JSON Data for client

// Routers
app.use("/api/products", productRoutes);

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}.`);
});
