const express = require("express");
const auth = require("./handlers/auth");

const db = require("./pkg/db");
db.init();

const app = express();

// Middleware
app.use(express.json());

// Endpoints
// Create account
app.post("/api/v1/auth/create-account", auth.create);

// Login account
app.post("/api/v1/auth/login", auth.login);

// Forgot password
app.post("/api/v1/auth/forgot-password", auth.forgotPassword);

// Reset password
app.post("/api/v1/auth/reset-password", auth.resetPassword);

// Validate token
app.post("api/v1/auth/validate-token", auth.validate);

app.listen(8080, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Service auth started successfully on localost:8080");
});
