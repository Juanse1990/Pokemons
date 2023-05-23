import "./Home.Module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByApiDb,
  filterByType,
  getAllPokemons,
  getAllTypes,
  orderByNameOrAttack,
} from "../../redux/actions";
import Pokemons from "./components/Pokemons";
import NavBar from "../components/NavBar";
import Search from "./components/Search";

function Home() {
  const dispatch = useDispatch();
  const allTypesI = useSelector((state) => state.allTypes);
  const allPokemonsI = useSelector((state) => state.allPokemons);
  const pokemonName = useSelector((state) => state.pokemons);
  const pokemonsOrder = useSelector((state) => state.pokemonsOrder);
  const solo = useSelector((state) => state.solo);
  const pokemonsPerPage = 12;
  const [page, setPage] = useState(0);
  const [pokemons, setPokemons] = useState();
  const [order, setOrder] = useState();

  useEffect(() => {
    dispatch(getAllPokemons());
    dispatch(getAllTypes());
  }, []);
  useEffect(() => {
    setPokemons([...allPokemonsI]?.splice(0, pokemonsPerPage));
  }, [allPokemonsI, solo]);
  useEffect(() => {
    setPokemons([...pokemonsOrder]?.splice(0, pokemonsPerPage));
  }, [pokemonsOrder, order]);

  const nextHandler = () => {
    const totalPokemons = pokemonsOrder
      ? pokemonsOrder.length
      : allPokemonsI.length;
    const nextPage = page + 1;
    const index = nextPage * pokemonsPerPage;
    if (index > totalPokemons) return;

    {
      pokemonsOrder
        ? setPokemons([...pokemonsOrder].splice(index, pokemonsPerPage))
        : setPokemons([...allPokemonsI].splice(index, pokemonsPerPage));
    }
    setPage(nextPage);
  };
  const prevHandler = () => {
    const prevPage = page - 1;
    if (prevPage < 0) return;
    const index = prevPage * pokemonsPerPage;
    {
      pokemonsOrder
        ? setPokemons([...pokemonsOrder].splice(index, pokemonsPerPage))
        : setPokemons([...allPokemonsI].splice(index, pokemonsPerPage));
    }
    setPage(prevPage);
  };

  function handleOrder(event) {
    event.preventDefault();
    dispatch(orderByNameOrAttack(event.target.value));
    //setear para que capte el cambio
    setOrder(event.target.value);
  }

  function handleFilterByApiDb(event) {
    dispatch(filterByApiDb(event.target.value));
    setOrder(event.target.value);
  }

  function handleFilterByType(event) {
    event.preventDefault();
    dispatch(filterByType(event.target.value));
    setOrder(event.target.value);
  }

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div>
        <Search />
      </div>
      <div className="selects">
        <select onChange={(event) => handleOrder(event)}>
          <option value="normal">Normal</option>
          <option value="alfa-asc">A-Z</option>
          <option value="alfa-des">Z-A</option>
          <option value="atta-asc">More Attack</option>
          <option value="atta-des">Less attack</option>
        </select>
        <select onChange={(event) => handleFilterByType(event)}>
          <option value="Types">Types</option>
          {allTypesI.map((type) => {
            return (
              <option key={type.id} value={type.name}>
                {type.name}
              </option>
            );
          })}
        </select>
        <select onChange={(event) => handleFilterByApiDb(event)}>
          <option value="api-db">API-DB</option>
          <option value="api">API</option>
          <option value="db">DB</option>
        </select>
      </div>
      <div>
        <button onClick={prevHandler}>PREV</button>
        <button onClick={nextHandler}>NEXT</button>
      </div>
      {!solo ? (
        <div className="pokeGrid">
          {pokemons?.map(({ id, name, img, types }) => {
            return (
              <Pokemons
                key={id}
                id={id}
                name={name}
                img={img}
                type0={types[0]}
                type1={types[1]}
              />
            );
          })}
        </div>
      ) : (
        <div className="pokeGrid">
          <Pokemons
            key={pokemonName.name}
            id={pokemonName.id}
            name={pokemonName.name}
            img={pokemonName.img}
            type0={
              pokemonName.types[0] &&
              (pokemonName.types[0] ? pokemonName.types[0].name : "null")
            }
            type1={
              pokemonName.types[1] &&
              (pokemonName.types[1] ? pokemonName.types[1].name : "null")
            }
          />
        </div>
      )}
    </>
  );
}

export default Home;
