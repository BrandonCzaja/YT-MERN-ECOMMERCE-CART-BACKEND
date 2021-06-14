require("dotenv").config(); // Bring in .env variables
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

// Connect DB from Database Folder
const connectDB = require("./database/db.js");
connectDB();

// app.get("/", (req, res) => {
// 	res.send("Hello World");
// });

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}.`);
});
