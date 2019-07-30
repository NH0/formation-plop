const { getIngredients } = require("./ingredients");
const { getSteps } = require("./steps");

const getRecipe = () => [
  {
    type: "input",
    name: "name",
    message: "Enter your recipe name:"
  },
  getIngredients(),
  getSteps()
];

const getElement = () => [
  {
    type: "list",
    name: "element",
    choices: ["helper"],
    message: "Choose the element you want to create:"
  }
];

module.exports = {
  getRecipe,
  getElement
};
