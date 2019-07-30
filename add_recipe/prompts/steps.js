const getOneStep = () => [
    {
        type: 'input',
        name: 'step',
        message: 'Enter your step :',
    }
];

const getSteps = () => ({
        type: 'recursive',
        name: 'steps',
        message: 'Would you like to add a step ?',
        default: "y",
        prompts: getOneStep(),
});

module.exports = {
    getSteps,
};