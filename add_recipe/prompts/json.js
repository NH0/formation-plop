const getJSONPrompt = () => [
  {
    type: "input",
    name: "jsonFilepath",
    message: "Enter the path of the JSON file:",
    default: "myFavRecipe.json"
  }
];

module.exports = {
  getJSONPrompt
};
