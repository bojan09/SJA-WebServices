const mongoose = require("mongoose");

const User = mongoose.model(
  "user",
  {
    email: String,
    password: String,
    full_name: String,
  },
  // collection/model name
  "users"
);

const create = async (data) => {
  let user = new User(data);
  return user.save();
};

const getUserByEmail = async (email) => {
  return User.findOne({ email });
};

module.exports = {
  create,
  getUserByEmail,
};
