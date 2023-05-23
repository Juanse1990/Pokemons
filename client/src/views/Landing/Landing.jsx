import "./Landing.Module.css";
import poke from "../../assets/PokemonLogo.png";
import { NavLink } from "react-router-dom";

function Landing() {
  return (
    <div className="container">
      <NavLink to={"/home"} className="link">
        <img src={poke} alt="POKÉMON" className="logo" />
      </NavLink>
    </div>
  );
}

export default Landing;
