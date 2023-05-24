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

const initialState = {
  allPokemons: [],
  allTypes: [],
  pokemons: [],
  pokemonsOrder: [],
  solo: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ALL_POKEMONS:
      return {
        ...state,
        allPokemons: payload,
        solo: false,
      };
    case ALL_TYPES:
      return {
        ...state,
        allTypes: payload,
      };
    case ADD_POKEMON:
      return {
        ...state,
      };
    case POKEMONS_ID:
      return {
        ...state,
        pokemons: payload,
      };
    case POKEMONS_NAME:
      return {
        ...state,
        pokemons: payload,
        solo: true,
      };
    case BACK:
      return {
        ...state,
        solo: false,
      };
    case FILTER_BY_TYPE: {
      const allPokemons = state.allPokemons;
      const statusFiltered =
        payload === "Types"
          ? allPokemons
          : allPokemons.filter((el) => el.types.includes(payload));
      return {
        ...state,
        pokemonsOrder: statusFiltered.length ? statusFiltered : allPokemons,
      };
    }
    case FILTER_BY_APIDB: {
      let statusFiltered2 = state.allPokemons;
      if (payload == "db") {
        console.log(statusFiltered2);
        statusFiltered2 = state.allPokemons.filter((el) => el.createdInDb);
        console.log(statusFiltered2);
      } else {
        statusFiltered2 = state.allPokemons.filter((el) => !el.createdInDb);
      }
      return {
        ...state,
        pokemonsOrder: statusFiltered2,
      };
    }

    case ORDER_BY_NAME_OR_ATTACK: {
      let sortedArray;
      if (payload === "alfa-asc") {
        sortedArray = state.allPokemons.sort(function (a, b) {
          if (a.name > b.name) {
            return 1;
          }
          if (b.name > a.name) {
            return -1;
          }
          return 0;
        });
      }
      if (payload === "alfa-des") {
        sortedArray = state.allPokemons.sort(function (a, b) {
          if (a.name > b.name) {
            return -1;
          }
          if (b.name > a.name) {
            return 1;
          }
          return 0;
        });
      }
      if (payload === "atta-asc") {
        sortedArray = state.allPokemons.sort(function (a, b) {
          if (a.attack > b.attack) {
            return -1;
          }
          if (b.attack > a.attack) {
            return 1;
          }
          return 0;
        });
      }
      if (payload === "atta-des") {
        sortedArray = state.allPokemons.sort(function (a, b) {
          if (a.attack > b.attack) {
            return 1;
          }
          if (b.attack > a.attack) {
            return -1;
          }
          return 0;
        });
      }
      if (payload === "normal") {
        const apiPokes = state.allPokemons
          .filter((el) => !el.createdInDb)
          .sort(function (a, b) {
            if (a.id > b.id) {
              return 1;
            }
            if (b.id > a.id) {
              return -1;
            }
            return 0;
          });
        const dbPokes = state.allPokemons
          .filter((el) => el.createdInDb)
          .sort(function (a, b) {
            if (a.id > b.id) {
              return 1;
            }
            if (b.id > a.id) {
              return -1;
            }
            return 0;
          });
        sortedArray = [...apiPokes, ...dbPokes];
      }
      return {
        ...state,
        pokemonsOrder: sortedArray,
      };
    }
    default:
      return { ...state };
  }
};

export default reducer;
