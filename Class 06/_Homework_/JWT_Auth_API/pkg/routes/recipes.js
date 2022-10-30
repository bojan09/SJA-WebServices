// Router
const router = require("express").Router();

router.post("/recipes", async (req, res) => {
  res.json(req.body);

  // Create new user data
  const recipe = new Recipe({
    name: req.body.name,
    email: req.body.description,
  });
  try {
    // Save the user
    const savedRecipe = await user.save();
    res.send(savedRecipe);
  } catch (error) {
    res.status(400).send(err);
  }
});

router.get("/recipes", (req, res) => {
  res.json(
    `The recipe is: ${req.body.name} , description: ${req.body.description}`
  );
});

module.exports = router;
