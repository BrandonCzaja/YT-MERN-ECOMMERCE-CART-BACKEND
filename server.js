require("dotenv").config(); // Bring in .env variables
const express = require("express");
const app = express();
const productRoutes = require("./controllers/productRoutes");
const PORT = process.env.PORT || 3001;

// Connect DB from Database Folder
const connectDB = require("./database/db");
connectDB();

// Middleware
app.use(express.json()); // JSON Data for client

app.get("/", (req, res) => {
	res.json({ message: "API running..." });
});

// Routers
app.use("/api/products", productRoutes);

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}.`);
});
