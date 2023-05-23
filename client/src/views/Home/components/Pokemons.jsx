import "./Pokemons.Module.css";
import { NavLink } from "react-router-dom";

function Pokemons({ id, name, img, type0, type1 }) {
  return (
    <>
      <NavLink to={`/detail/${id}`} className="linkDetail">
        <div className="pokeBox">
          <h2>{name}</h2>
          {type0 && (
            <>
              <h2>{type0 ? type0 : "null"}</h2>
            </>
          )}
          {type1 && (
            <>
              <h2>{type1 ? type1 : "null"}</h2>
            </>
          )}
          <img src={img} alt={name} className="pokeImg" />
        </div>
      </NavLink>
    </>
  );
}

export default Pokemons;
