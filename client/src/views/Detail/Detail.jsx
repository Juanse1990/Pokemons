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
      <div className="Container">
        <div className="detailContainer">
          <img src={pokemon.img} alt={pokemon.name} className="col pokeImg" />
          <div className="col pokeDetails">
            <h3>Name: {pokemon.name}</h3>
            {pokemon.types && (
              <>
                <h3>
                  Type1: {pokemon.types[0] ? pokemon.types[0].name : "null"}
                </h3>
                <h3>
                  Type2: {pokemon.types[1] ? pokemon.types[1].name : "null"}
                </h3>
              </>
            )}
            <h3>Hp: {pokemon.hp}</h3>
            <h3>Attack: {pokemon.attack}</h3>
            <h3>Defense: {pokemon.defense}</h3>
            <h3>Speed: {pokemon.speed}</h3>
            <h3>Height: {pokemon.height}</h3>
            <h3>Weight: {pokemon.weight}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
