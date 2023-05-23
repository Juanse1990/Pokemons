const { Router } = require("express");
const { getPokemonsApi } = require("../controllers/getPokemons");
const { getPokemonApiById } = require("../controllers/getPokemonId");
const {
  getPokemonApiByNa,
  getPokemonDbByNa,
} = require("../controllers/getPokemonNa");
const { postPokemon } = require("../controllers/postPokemons");
const { getTypes } = require("../controllers/getTypes");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.get("/pokemons", async (req, res) => {
  const { name } = req.query;
  try {
    if (!name) {
      const pokemons = await getPokemonsApi();
      return pokemons.length
        ? res.status(200).json(pokemons)
        : res.status(400).json("Ups! We can't find any Pokemon...");
    } else {
      const pokemonApi = await getPokemonApiByNa(name.toLowerCase());
      if (pokemonApi.name != null) return res.status(200).json(pokemonApi);
      return res.status(200).json(await getPokemonDbByNa(name));
    }
  } catch (error) {
    return res.status(404).json("Bad Request");
  }
});

router.get("/pokemons/:id", async (req, res) => {
  const { id } = req.params;
  try {
    return res.status(200).json(await getPokemonApiById(id));
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
});

router.post("/pokemons", async (req, res) => {
  const { name, hp, attack, defense, speed, height, weight, img, types } =
    req.body;
  try {
    return res.status(200).json(
      await postPokemon({
        name,
        hp,
        attack,
        defense,
        speed,
        height,
        weight,
        img,
        types,
      })
    );
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
});

router.get("/types", async (req, res) => {
  try {
    return res.status(200).json(await getTypes());
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
});

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
