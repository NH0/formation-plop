const { getElement } = require("./add_recipe/prompts");

module.exports = function(plop) {
  plop.setPrompt("recursive", require("inquirer-recursive"));
  plop.setGenerator("basics", {
    description: "Add new file",
    prompts: getElement(),
    actions: [
      {
        type: "modify",
        path: "add_recipe/helpers",
        templateFile: "./add_recipe/templates/helper.handlebars"
      }
    ]
  });
};
