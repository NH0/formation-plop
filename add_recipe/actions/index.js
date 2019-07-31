const getActions = answers => {
  return [
    {
      type: "add",
      path: "src/pages/{{properCase answers.name}}.js",
      templateFile: "./add_recipe/templates/recipe.handlebars",
      data: {
        answers
      }
    },
    {
      type: "modify",
      path: "src/routes.js",
      pattern: /\/\/ PLOP: Add pages import below -- DO NOT ERASE \/\//g,
      templateFile: "./add_recipe/templates/routes_import.template",
      data: {
        answers
      }
    },
    {
      type: "modify",
      path: "src/App.js",
      pattern: /\{\/\* PLOP: Add recipe links below -- DO NOT ERASE \*\/\}/g,
      templateFile: "./add_recipe/templates/App_links.template",
      data: {
        answers
      }
    },
    {
      type: "modify",
      path: "src/routes.js",
      pattern: /\{\/\* PLOP: Add routes import below -- DO NOT ERASE \*\/\}/g,
      templateFile: "./add_recipe/templates/routes_route.template",
      data: {
        answers
      }
    }
  ];
};

module.exports = getActions;
