const mongoose = require("mongoose");

const recipeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 4,
    max: 30,
  },
  description: {
    type: String,
    required: true,
    min: 20,
    max: 1000,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("recipe", recipeSchema);
