const URL = "https://pokeapi.co/api/v2/pokemon";
const axios = require("axios");
const { Pokemon } = require("../db");

const getPokemonApiByNa = async (name) => {
  const { data } = await axios(`${URL}/${name}`);
  let pokemon = {
    id: data.id,
    name: data.name,
    img: data.sprites.other["official-artwork"].front_default,
    hp: data.stats[0].base_stat,
    attack: data.stats[1].base_stat,
    defense: data.stats[2].base_stat,
    speed: data.stats[5].base_stat,
    height: data.height,
    weight: data.weight,
    types: data.types.map((type) => {
      return { name: type.type.name };
    }),
  };
  return pokemon;
};

const getPokemonDbByNa = async (name) => {
  const pokemon = await Pokemon.findOne({
    where: where(fn("lower", col("name")), fn("lower", name)),
    include: {
      model: Type,
      attributes: ["name"],
      through: { attributes: {} },
    },
  });
  return pokemon;
};

module.exports = { getPokemonApiByNa, getPokemonDbByNa };
