// Router
const router = require("express").Router();
// Auth
const verify = require("./verifyToken");
// Recipes Model
const Recipe = require("../models/Recipes");

// Create new recipe
router.post("/recipe", verify, (req, res) => {
  const recipe = new Recipe({
    recipeName: req.body.recipeName,
    description: req.body.description,
    ingredients: req.body.ingredients,
  });

  recipe
    .save()
    .then(() => res.json("Recipe added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Get all recipes
router.get("/recipe", (req, res) => {
  Recipe.find()
    .then((recipe) => res.json(recipe))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Get one Recipe
router.get("recipe/:id", (req, res) => {
  Recipe.findById(req.params.id)
    .then((recipe) => res.json(recipe))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Update recipe
router.put("recipe/:id", (req, res) => {
  Recipe.findById(req.params.id)
    // Recipe.findById({id:_id})
    .then((recipe) => {
      recipeName = req.body.recipeName;
      description = req.body.description;
      ingredients = req.body.ingredients;

      recipe
        .save()
        .then(() => res.json("Recipe updated"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

// Delete Recipe
router.delete("recipe/:id", (req, res) => {
  // Recipe.findByIdAndDelete({ id: _id })
  Recipe.findByIdAndDelete(req.params.id)
    .then(() => res.json("Recipe Deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
