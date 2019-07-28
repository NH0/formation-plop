const getStep = () => [
    {
        type: 'input',
        name: 'step',
        message: 'Enter your step :',
    },
];

const getSteps = () => (
    {
        type: 'recursive',
        name: 'steps',
        message: 'Would you like to add a step ?',
        default: 'y',
        prompts: getStep(),
    });

module.exports = {
    getSteps,
};