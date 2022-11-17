const express = require("express");
const books = require("./handlers/books");
const db = require("./pkg/db/db.js");

db.init();

const app = express();

// using middleware, so that we can use the req.body bellow
app.use(express.json());

app.get("/books", books.getAll);
app.get("/books/:id", books.getOne);
app.post("/books", books.create);
app.put("/books/:id", books.update);
app.patch("/books/:id", books.partialUpdate);
app.delete("/books/:id", books.remove);

app.listen(8080, (err) => {
  if (err) {
    return console.log("Server Unavailable");
  }
  console.log("Server started successfully on port 8080");
});
