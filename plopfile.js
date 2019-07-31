const { getRecipe } = require('./add_recipe/prompts');
const helpers = require('./add_recipe/helpers');
const getActions = require('./add_recipe/actions');

module.exports = function (plop) {
    plop.setPrompt("recursive", require("inquirer-recursive"));
    helpers.forEach(helper => plop.setHelper(helper.name, helper.helper));

    plop.setGenerator('basics', {
        description: 'Add new recipe',
        prompts: getRecipe(),
        actions: getActions,
    });
};
