import "./Detail.Module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemonId } from "../../redux/actions";
import NavBar from "../components/NavBar";

function Detail() {
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemons);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPokemonId(id));
  }, [id]);

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="detailContainer">
        <img src={pokemon.img} alt={pokemon.name} className="col pokeImg" />
        <div className="col pokeDetails">
          <h2>Name: {pokemon.name}</h2>
          {pokemon.types && (
            <>
              <h2>
                Type1: {pokemon.types[0] ? pokemon.types[0].name : "null"}
              </h2>
              <h2>
                Type2: {pokemon.types[1] ? pokemon.types[1].name : "null"}
              </h2>
            </>
          )}
          <h2>Hp: {pokemon.hp}</h2>
          <h2>Attack: {pokemon.attack}</h2>
          <h2>Defense: {pokemon.defense}</h2>
          <h2>Speed: {pokemon.speed}</h2>
          <h2>Height: {pokemon.height}</h2>
          <h2>Weight: {pokemon.weight}</h2>
        </div>
      </div>
    </div>
  );
}

export default Detail;
