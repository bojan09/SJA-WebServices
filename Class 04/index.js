require("dotenv").config();
const config = require("./pkg/config");
const express = require("express");
const auth = require("./handlers/auth");
const { expressjwt: jwt } = require("express-jwt");

const db = require("./pkg/db");
db.init();

const app = express();

// Middleware
app.use(express.json());

// JWT проверка
// Прави проверка на токен секаде
app.use(
  jwt({
    algorithms: ["H256"],
    secret: `${config.get("service").jwt_secret}`,
  })
    // Освен на овие рути
    .unless({
      path: [
        "api/v1/auth/create-account",
        "api/v1/auth/login",
        "api/v1/auth/forgot-password",
        "api/v1/auth/reset-password",
      ],
    })
);

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

// Проверува дали грешката е UnauthorizedError, тогаш враќа invalid token
app.use(function (err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    res.status(401).send("invalid token...");
  } else {
    next(err);
  }
});

// app.listen(config.get("service").port, (err) => {
//   if (err) {
//     return console.log(err);
//   }
//   console.log(
//     `Service auth started successfully on port ${config.get("service").port}`
//   );

app.listen(process.env.PORT, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log(`Service auth started successfully on port ${process.env.PORT}`);
});
