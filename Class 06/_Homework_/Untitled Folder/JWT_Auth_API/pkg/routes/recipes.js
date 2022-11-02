const router = require("express").Router();

// Auth
const verify = require("./verifyToken");
// Recipes Model
const Recipe = require("../models/Recipes");

const getAllRecipes = async (recipe) => {
  return await Recipe.find(recipe);
};

const createRecipe = async (recipe) => {
  return Recipe.create(recipe);
};

const getRecipeById = async (id) => {
  return await Recipe.findById(id);
};

const updateRecipe = async (id, recipe) => {
  return await Recipe.findByIdAndUpdate(id, recipe);
};

const deleteRecipe = async (id) => {
  return await Recipe.findByIdAndDelete(id);
};

// Routes
router.get("/recipe", getAllRecipes);
router.post("/recipe", verify, createRecipe);
router.get("/recipe/:id", verify, getRecipeById);
router.put("/recipe/:id", verify, updateRecipe);
router.delete("/recipe/:id", verify, deleteRecipe);

module.exports = router;
