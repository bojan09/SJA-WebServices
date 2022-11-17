const mongoose = require("mongoose");

const init = () => {
  const dsn =
    "mongodb+srv://bojan_stan:Stanimirovski@cluster0.jyyccxp.mongodb.net/?retryWrites=true&w=majority;";
  mongoose.connect(dsn, (err) => {
    if (err) {
      return console.log("Database unavailable", err);
    }
    console.log("Sucessfully connected to Database");
  });
};

module.exports = {
  init,
};
