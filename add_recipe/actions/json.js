const fs = require("fs");
const getActions = require("./index");

const getJSONActions = answersJSON => {
  const JSONrecipe = JSON.parse(
    fs.readFileSync(answersJSON.jsonFilepath, "utf8")
  );
  console.log(JSONrecipe.name);
  return getActions(JSONrecipe);
};

module.exports = getJSONActions;
