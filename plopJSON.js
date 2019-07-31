const { getJSONPrompt } = require('./add_recipe/prompts/json');
const helpers = require('./add_recipe/helpers');
const getJSONActions = require('./add_recipe/actions/json');

module.exports = function (plop) {
    plop.setPrompt("recursive", require("inquirer-recursive"));
    helpers.forEach(helper => plop.setHelper(helper.name, helper.helper));

    plop.setGenerator('basics', {
        description: 'Add new recipe',
        prompts: getJSONPrompt(),
        actions: getJSONActions,
    });
};
