const { getIngredients } = require('./ingredients');
const { getSteps } = require('./steps');

const getRecipe = () => [
    {
        type: 'input',
        name: 'name',
        message: 'Enter your recipe name:',
    },
    getIngredients(),
    getSteps()
];

module.exports = {
    getRecipe,
};
