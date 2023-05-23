const URL = "https://pokeapi.co/api/v2/type";
const axios = require("axios");
const { Type } = require("../db");

const getTypes = async () => {
  const { data } = await axios(`${URL}`);
  const types = data.results;
  types.forEach((type) => {
    Type.findOrCreate({
      where: { name: type.name },
    });
  });
  const allTypes = await Type.findAll({
    attributes: {
      exclude: ["updatedAt", "createdAt"],
    },
  });
  return allTypes;
};

module.exports = { getTypes };
