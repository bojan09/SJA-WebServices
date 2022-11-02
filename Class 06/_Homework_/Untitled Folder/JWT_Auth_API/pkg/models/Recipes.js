const mongoose = require("mongoose");

const recipeSchema = mongoose.Schema({
  recipeName: {
    type: String,
    required: true,
    min: 4,
    max: 30,
  },
  description: {
    type: String,
    required: true,
    min: 5,
    max: 1000,
  },

  ingredients: {
    type: [String],
    required: true,
    min: 2,
    max: 20,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("recipe", recipeSchema);
