const mongoose = require("mongoose");
// gives access to .env file, containing DB_CONNECTION
require("dotenv/config");

const init = () => {
  mongoose.connect(process.env.DB_CONNECTION, (err) => {
    if (err) {
      return console.log("Could not connect to DB", err);
    }
    console.log("Successfully connected to DB");
  });
};

module.exports = {
  init,
};
