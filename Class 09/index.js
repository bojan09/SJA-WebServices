const express = require("express");
const weather = require("./handlers/weather");
const app = express();

app.get("/app/v1/weather/:city", weather.getCity);

app.listen(8080, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Server started on port 8080 ");
});
