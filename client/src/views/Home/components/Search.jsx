import "./Search.Module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonName, back } from "../../../redux/actions";

function Search() {
  const [name, setName] = useState("");
  const solo = useSelector((state) => state.solo);
  const dispatch = useDispatch();

  //\ \s significa "un espacio", y \s+significa "uno o más espacios".
  //cada cadena contigua de caracteres de espacio se reemplaza con
  //la cadena vacía debido a la extensión +.

  const nameChange = (event) => {
    event.preventDefault();
    setName(event.target.value.replaceAll(/^\s+/g, "").replaceAll(/\s+/g, " "));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name !== "") {
      dispatch(getPokemonName(name));
      setName("");
    }
  };

  const handleBack = (event) => {
    event.preventDefault();
    dispatch(back());
  };

  return (
    <>
      <form className="searchForm" onSubmit={handleSubmit}>
        {!solo ? (
          <>
            <input
              className="searchInput"
              placeholder="Search pokemon"
              onChange={(event) => nameChange(event)}
              type="text"
              value={name}
            ></input>
            <button type="submit" className="searchButton">
              Search
            </button>
          </>
        ) : (
          <>
            <button
              type="submit"
              className="searchButton"
              onClick={(event) => handleBack(event)}
            >
              All Pokemons
            </button>
          </>
        )}
      </form>
    </>
  );
}

export default Search;
