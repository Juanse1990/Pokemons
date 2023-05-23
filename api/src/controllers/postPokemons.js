const { Pokemon, Type } = require("../db");

const postPokemon = async ({
  name,
  hp,
  attack,
  defense,
  speed,
  height,
  weight,
  img,
  types,
}) => {
  const pokemonCreated = await Pokemon.create({
    name,
    hp,
    attack,
    defense,
    speed,
    height,
    weight,
    img,
  });
  const pokemonTypes = await Type.findAll({
    where: { name: types },
  });
  pokemonCreated.addType(pokemonTypes);
  return "Se ha creado con exito";
};

module.exports = { postPokemon };
