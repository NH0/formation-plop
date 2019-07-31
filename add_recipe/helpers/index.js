const helpers = [
  {
    name: "deMaGrandMere",
    helper: name => {
      return `${name} de ma grand-mère`;
    }
  },
  {
    name: "isNoUnit",
    helper: unit => {
      return unit === "No unit";
    }
  }
];

module.exports = helpers;
