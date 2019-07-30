const { getRecipe } = require('./add_recipe/prompts');

module.exports = function (plop) {
    plop.setPrompt("recursive", require("inquirer-recursive"));
    plop.setGenerator('basics', {
        description: 'Add new recipe',
        prompts: getRecipe(),
        actions: [{
            type: 'add',
            path: 'src/pages/{{name}}.js',
            templateFile: './add_recipe/templates/recipe.handlebars'
        },
        {
            type: 'modify',
            path: 'src/routes.js',
            pattern: /\/\/ PLOP: Add pages import below -- DO NOT ERASE \/\//g,
            templateFile: './add_recipe/templates/routes_import.template',
        },
        {
            type: 'modify',
            path: 'src/App.js',
            pattern: /\{\/\* PLOP: Add recipe links below -- DO NOT ERASE \*\/\}/g,
            templateFile: './add_recipe/templates/App_links.template',
        },
        {
            type: 'modify',
            path: 'src/routes.js',
            pattern: /\{\/\* PLOP: Add routes import below -- DO NOT ERASE \*\/\}/g,
            templateFile: './add_recipe/templates/routes_route.template',
        }]
    });
};
