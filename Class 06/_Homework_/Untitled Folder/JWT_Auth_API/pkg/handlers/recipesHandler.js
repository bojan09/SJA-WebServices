const recipeService = require("../routes/recipes");

const getAllRecipes = async (req, res) => {
  try {
    const recipe = await recipeService.getAllRecipes();
    res.json({ data: recipe, status: "Success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createRecipe = async (req, res) => {
  try {
    const recipe = await recipeService.createRecipe(req.body);
    res.json({ data: recipe, status: "Success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getRecipeById = async (req, res) => {
  try {
    const recipe = await recipeService.getRecipeById(req.params.id);
    res.json({ data: recipe, status: "Success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateRecipe = async (req, res) => {
  try {
    const recipe = await recipeService.updateRecipe(req.params.id, req.data);
    res.json({ data: recipe, status: "Success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteRecipe = async (req, res) => {
  try {
    const recipe = await recipeService.deleteRecipe(req.params.id);
    res.json({ data: recipe, status: "Success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllRecipes,
  createRecipe,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
};
