const getOneIngredient = () => [
  {
    type: "list",
    name: "ingredient",
    message: "Name of ingredient :",
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
      "Meat",
      "Tomatoes",
      "Basil",
      "Carrots",
      "Bay leafs",
      "Thyme"
    ]
  },
  {
    type: "list",
    name: "unit",
    message: function(answers) {
      return "Unit of " + answers.ingredient;
    },
    choices: ["L", "cL", "mL", "teaspoon", "tablespoon", "glass"],
    when: function(answers) {
      return ["Milk", "Olive oil", "Vinegar"].includes(answers.ingredient);
    }
  },
  {
    type: "list",
    name: "unit",
    message: function(answers) {
      return "Unit of " + answers.ingredient;
    },
    choices: ["kg", "g", "teaspoon", "tablespoon", "No unit"],
    when: function(answers) {
      return [
        "Flour",
        "Rice",
        "Pasta",
        "Potatoes",
        "Salt and pepper",
        "Sugar",
        "Butter",
        "Meat",
        "Tomatoes",
        "Carrots"
      ].includes(answers.ingredient);
    }
  },
  {
    type: "input",
    name: "quantity",
    message: function(answers) {
      return "Quantity of " + answers.ingredient;
    },
    validate: function(quantity) {
      if (isNaN(quantity.trim())) {
        return "You must provide a number !";
      }
      return true;
    }
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
