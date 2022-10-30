require("dotenv").config();
const express = require("express");
const app = express();

// Auth Route
const authRoute = require("./pkg/routes/auth");
// Recipe Route
const recipeRoute = require("./pkg/routes/recipes");

// Mongoose
const mongoose = require("mongoose");

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("Connected to DB");
});

// Middleware
app.use(express.json());

// Route Middlewares
app.use("/api/user", authRoute);
app.use("/api/user", recipeRoute);

app.listen(8080, () => console.log(`Server is Up & Running`));
