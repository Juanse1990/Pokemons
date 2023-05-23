import axios from "axios";
import {
  ALL_POKEMONS,
  ALL_TYPES,
  POKEMONS_ID,
  POKEMONS_NAME,
  ADD_POKEMON,
  BACK,
  FILTER_BY_TYPE,
  FILTER_BY_APIDB,
  ORDER_BY_NAME_OR_ATTACK,
} from "./action-types";

export const getAllPokemons = () => {
  const endpoint = "http://localhost:3001/pokemons";
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);
      if (!data.length) throw Error("No hay Pokemones");
      return dispatch({
        type: ALL_POKEMONS,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getAllTypes = () => {
  const endpoint = "http://localhost:3001/types";
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);
      if (!data.length) throw Error("No hay Tipos");
      return dispatch({
        type: ALL_TYPES,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export function addPokemon(payload) {
  return async (dispatch) => {
    const pokemon = await axios.post("http://localhost:3001/pokemons", payload);
    return dispatch({
      type: ADD_POKEMON,
      payload: pokemon,
    });
  };
}

export const getPokemonId = (id) => {
  const endpoint = `http://localhost:3001/pokemons/${id}`;
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);
      if (!Object.keys(data).length)
        throw Error(`No hay un Pokemon con el ID:${id}`);
      return dispatch({
        type: POKEMONS_ID,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getPokemonName = (name) => {
  const endpoint = `http://localhost:3001/pokemons/?name=${name}`;
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);
      if (!Object.keys(data).length)
        throw Error(`No hay un Pokemon con el Name:${name}`);
      return dispatch({
        type: POKEMONS_NAME,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const back = () => {
  return {
    type: BACK,
  };
};

export const filterByType = (payload) => {
  return {
    type: FILTER_BY_TYPE,
    payload,
  };
};

export const filterByApiDb = (payload) => {
  return {
    type: FILTER_BY_APIDB,
    payload,
  };
};

export const orderByNameOrAttack = (payload) => {
  return {
    type: ORDER_BY_NAME_OR_ATTACK,
    payload,
  };
};
