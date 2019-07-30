const getRecipe = () => [
    {
        type: 'input',
        name: 'name',
        message: 'Enter your recipe name:',
    },
    {
        type: 'input',
        name: 'ingredient',
        message: 'Quantity and name of ingredient :',
    },
    {
        type: 'input',
        name: 'step',
        message: 'Enter your step :',
    }
];

module.exports = {
    getRecipe,
};
