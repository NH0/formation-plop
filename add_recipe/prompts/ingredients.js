const getIngredient = () => [
  {
    type: "input",
    name: "ingredient",
    message: "Quantity and name of ingredient :"
  }
];

const getIngredients = () => ({
  type: "recursive",
  name: "ingredients",
  message: "Would you like to add an ingredient ?",
  default: "y",
  prompts: getIngredient()
});

module.exports = {
  getIngredients
};
