const getIngredients = () => [
    {
        type: 'input',
        name: 'ingredient1',
        message: 'Quantity and name of ingredient :',
    },
    {
        type: 'input',
        name: 'ingredient2',
        message: 'Quantity and name of ingredient :',
    },
    {
        type: 'input',
        name: 'ingredient3',
        message: 'Quantity and name of ingredient :',
    }
];

module.exports = {
    getIngredients,
};