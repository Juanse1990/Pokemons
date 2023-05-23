import { NavLink } from "react-router-dom";
import "./NavBar.Module.css";

function NavBar() {
  return (
    <>
      <div className="wrap">
        <NavLink to="/">
          <button className="buttonNav">Get Out</button>
        </NavLink>
        <NavLink to="/home">
          <button className="buttonNav">Home</button>
        </NavLink>
        <NavLink to="/form">
          <button className="buttonNav">Create Pokemon</button>
        </NavLink>
      </div>
    </>
  );
}

export default NavBar;
