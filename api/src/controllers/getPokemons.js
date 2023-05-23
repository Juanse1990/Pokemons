const URL = "https://pokeapi.co/api/v2/pokemon?limit=50";
const axios = require("axios");

const getPokemonsApi = async () => {
  const apiUrl = await axios(`${URL}`);
  const results = apiUrl.data.results;
  const pokemonInfo = [];
  for (let i = 0; i < results.length; i++) {
    const pokes = await axios(results[i].url);
    const pokeInfo = pokes.data;
    pokemonInfo.push({
      id: pokeInfo.id,
      name: pokeInfo.name,
      img: pokeInfo.sprites.other["official-artwork"].front_default,
      hp: pokeInfo.stats[0].base_stat,
      attack: pokeInfo.stats[1].base_stat,
      defense: pokeInfo.stats[2].base_stat,
      speed: pokeInfo.stats[5].base_stat,
      weight: pokeInfo.weight,
      height: pokeInfo.height,
      types: pokeInfo.types.map((t) => t.type.name),
    });
  }
  return pokemonInfo;
};

module.exports = { getPokemonsApi };
