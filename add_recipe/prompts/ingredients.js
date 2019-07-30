const getOneIngredient = () => [
  {
    type: "list",
    name: "ingredient",
    message: "Quantity and name of ingredient :",
    choices: [
      "Eggs",
      "Flour",
      "Rice",
      "Pasta",
      "Potatoes",
      "Salt and pepper",
      "Sugar",
      "Butter",
      "Milk",
      "Olive oil",
      "Vinegar",
      "Ground meat",
      "Tomatoes",
      "Basil",
      "Carrots",
      "Bay leafs",
      "Thyme"
    ]
  }
];

const getIngredients = () => ({
  type: "recursive",
  name: "ingredients",
  message: "Would you like to add an ingredient ?",
  default: "y",
  prompts: getOneIngredient()
});

module.exports = {
  getIngredients
};
