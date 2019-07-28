const { getRecipe } = require('./add_recipe/prompts');

module.exports = function (plop) {
    plop.setPrompt('recursive',  require('inquirer-recursive'));
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
            pattern: /\/\/ Add pages import below \/\//gi,
            templateFile: './add_recipe/templates/routes_import.template',
        },
        {
            type: 'modify',
            path: 'src/routes.js',
            pattern: /\{\/\* Add routes below \*\/\}/gi,
            templateFile: './add_recipe/templates/routes_route.template',
        }]
    });
};