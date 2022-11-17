require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
// const { expressjwt: jwt } = require('express-jwt');
const storage = require("./handlers/storage");

const app = express();

app.use(fileUpload());

app.post("/app/v1/storage", storage.upload);

app.get("/app/v1/storage/:file", storage.download);

app.listen(process.env.PORT, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log(`Service successfully started on port ${process.env.PORT}`);
});
