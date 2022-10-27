const mongoose = require("mongoose");
const config = require("../config");
// gives access to .env file, containing DB_CONNECTION
// require("dotenv/config");

const init = () => {
  const url = config.get("db").url;
  const username = config.get("db").username;
  const password = config.get("db").password;
  const dbname = config.get("db").dbname;

  const dsn = `mongo+srv://${username}:${password}@${url}/${dbname}?retryWrites=true&w=majority`;
  mongoose.connect(dsn, (err) => {
    if (err) {
      return console.log("Could not connect to DB server", err);
    }
    console.log("Successfully connected to DB");
  });

  //   mongoose.connect(process.env.DB_CONNECTION, (err) => {
  //     if (err) {
  //       return console.log("Could not connect to DB", err);
  //     }
  //     console.log("Successfully connected to DB");
  //   });
};

module.exports = {
  init,
};
