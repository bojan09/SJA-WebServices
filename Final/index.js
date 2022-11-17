const config = require("./pkg/config");
const db = require("./pkg/db");
const express = require("express");
const jwt = require("express-jwt");
const posts = require("./handlers/posts");
const authors = require("./handlers/authors");
const tenants = require("./handlers/tenants");

db.init();

const app = express();

app.use(express.json());
app.use(
  jwt.expressjwt({
    algorithms: ["HS256"],
    secret: config.get("service").jwt_secret,
  })
);

app.get("/authors", authors.getAll);
app.get("/posts", posts.getAll);
app.get("/posts/me", posts.getMine);
app.get("/posts/:handle", posts.getUsers);
app.get("/tenants", tenants.getAllTenants);

app.post("/posts", posts.create);
app.put("/posts/:id", posts.update);
app.delete("/post/:id", posts.remove);

app.listen(8080, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Server Up & Running on localost:8080");
});
