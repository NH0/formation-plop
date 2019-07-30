const getOneIngredient = () => [
    {
      type: "list",
      name: "ingredient",
      message: "Quantity and name of ingredient :",
      choices: ['Oeufs',
                'Farine',
                'Riz',
                'Pâtes',
                'Pommes de terre',
                'Sel/Poivre',
                'Sucre',
                'Beurre',
                'Lait',
                'Huile d\'olive',
                'Vinaigre',
                'Viande hachée',
                'Tomates',
                'Basilic',
                'Carrotes',
                'Laurier',
                'Thym',
            ]
    }
  ];

const getIngredients = () => ({
    type: "recursive",
    name: "ingredients",
    message: "Would you like to add an ingredient ?",
    default: "y",
    prompts: getOneIngredient()
  });

module.exports = {
    getIngredients,
};