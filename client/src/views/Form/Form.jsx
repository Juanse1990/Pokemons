import "./Form.Module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPokemon, getAllTypes, getAllPokemons } from "../../redux/actions";
import validate from "./validate.js";
import NavBar from "../components/NavBar";

function Form() {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.allTypes);
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    weight: "",
    height: "",
    types: [],
    img: "",
  });
  useEffect(() => {
    dispatch(getAllTypes());
  }, [dispatch]);
  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
        .replaceAll(/^\s+/g, "")
        .replaceAll(/\s+/g, " "),
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }
  // function handleChecked(e) {
  //   if (e.target.checked) {
  //     setInput({
  //       ...input,
  //       types: [...input.types, e.target.value],
  //     });
  //     setErrors(
  //       validate({
  //         ...input,
  //         types: [...input.types, e.target.value],
  //       })
  //     );
  //   } else if (!e.target.checked) {
  //     setInput({
  //       ...input,
  //       types: input.types.filter((el) => el !== e.target.value),
  //     });
  //     setErrors(
  //       validate({
  //         ...input,
  //         types: input.types.filter((el) => el !== e.target.value),
  //       })
  //     );
  //   }
  // }
  function handleSubmit(e) {
    e.preventDefault();
    if (Object.keys(errors).length === 0 && input.name.length) {
      dispatch(addPokemon(input));
      dispatch(getAllPokemons());
      alert("good job pokemon created");
      setInput({
        name: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        weight: "",
        height: "",
        types: [],
        img: "",
      });
    } else {
      alert("You must completed all fields!");
    }
  }
  return (
    <>
      <div>
        <div>
          <NavBar />
        </div>
        <div className="Container">
          <div className="formContainer">
            <div className="formHeader">
              <h2>Create your pokemon!</h2>
            </div>
            <form
              className="formContainerDiv"
              onSubmit={(e) => handleSubmit(e)}
            >
              <div className="formDiv">
                <label>Name: </label>
                <input
                  type="text"
                  value={input.name}
                  name="name"
                  onChange={(e) => handleChange(e)}
                  style={
                    input.name.length
                      ? errors.name
                        ? { borderColor: "#e74c3c" }
                        : { borderColor: "#2ecc71" }
                      : {}
                  }
                  autoComplete="off"
                />
                {errors.name ? (
                  <div>
                    <i
                      className="fas fa-exclamation-circle"
                      style={{ color: "#e74c3c" }}
                    ></i>
                    <p>{errors.name}</p>
                  </div>
                ) : input.name.length ? (
                  <i
                    className="fas fa-check-circle"
                    style={{ color: "#2ecc71" }}
                  ></i>
                ) : (
                  <i></i>
                )}
              </div>
              <div className="formDiv">
                <label>Hp: </label>
                <input
                  type="number"
                  value={input.hp}
                  name="hp"
                  onChange={(e) => handleChange(e)}
                  style={
                    input.hp.length
                      ? errors.hp
                        ? { borderColor: "#e74c3c" }
                        : { borderColor: "#2ecc71" }
                      : {}
                  }
                />
                {errors.hp ? (
                  <div>
                    <i
                      className="fas fa-exclamation-circle"
                      style={{ color: "#e74c3c" }}
                    ></i>
                    <p>{errors.hp}</p>
                  </div>
                ) : input.hp.length ? (
                  <i
                    className="fas fa-check-circle"
                    style={{ color: "#2ecc71" }}
                  ></i>
                ) : (
                  <i></i>
                )}
              </div>
              <div className="formDiv">
                <label>Attack: </label>
                <input
                  type="number"
                  value={input.attack}
                  name="attack"
                  onChange={(e) => handleChange(e)}
                  style={
                    input.attack.length
                      ? errors.attack
                        ? { borderColor: "#e74c3c" }
                        : { borderColor: "#2ecc71" }
                      : {}
                  }
                />
                {errors.attack ? (
                  <div>
                    <i
                      className="fas fa-exclamation-circle"
                      style={{ color: "#e74c3c" }}
                    ></i>
                    <p>{errors.attack}</p>
                  </div>
                ) : input.attack.length ? (
                  <i
                    className="fas fa-check-circle"
                    style={{ color: "#2ecc71" }}
                  ></i>
                ) : (
                  <i></i>
                )}
              </div>
              <div className="formDiv">
                <label>Defense: </label>
                <input
                  type="number"
                  value={input.defense}
                  name="defense"
                  onChange={(e) => handleChange(e)}
                  style={
                    input.defense.length
                      ? errors.defense
                        ? { borderColor: "#e74c3c" }
                        : { borderColor: "#2ecc71" }
                      : {}
                  }
                />
                {errors.defense ? (
                  <div>
                    <i
                      className="fas fa-exclamation-circle"
                      style={{ color: "#e74c3c" }}
                    ></i>
                    <p>{errors.defense}</p>
                  </div>
                ) : input.defense.length ? (
                  <i
                    className="fas fa-check-circle"
                    style={{ color: "#2ecc71" }}
                  ></i>
                ) : (
                  <i></i>
                )}
              </div>
              <div className="formDiv">
                <label>Speed: </label>
                <input
                  type="number"
                  value={input.speed}
                  name="speed"
                  onChange={(e) => handleChange(e)}
                  style={
                    input.speed.length
                      ? errors.speed
                        ? { borderColor: "#e74c3c" }
                        : { borderColor: "#2ecc71" }
                      : {}
                  }
                />
                {errors.speed ? (
                  <div>
                    <i
                      className="fas fa-exclamation-circle"
                      style={{ color: "#e74c3c" }}
                    ></i>
                    <p>{errors.speed}</p>
                  </div>
                ) : input.speed.length ? (
                  <i
                    className="fas fa-check-circle"
                    style={{ color: "#2ecc71" }}
                  ></i>
                ) : (
                  <i></i>
                )}
              </div>
              <div className="formDiv">
                <label>Weight: </label>
                <input
                  type="number"
                  value={input.weight}
                  name="weight"
                  onChange={(e) => handleChange(e)}
                  style={
                    input.weight.length
                      ? errors.weight
                        ? { borderColor: "#e74c3c" }
                        : { borderColor: "#2ecc71" }
                      : {}
                  }
                />
                {errors.weight ? (
                  <div>
                    <i
                      className="fas fa-exclamation-circle"
                      style={{ color: "#e74c3c" }}
                    ></i>
                    <p>{errors.weight}</p>
                  </div>
                ) : input.weight.length ? (
                  <i
                    className="fas fa-check-circle"
                    style={{ color: "#2ecc71" }}
                  ></i>
                ) : (
                  <i></i>
                )}
              </div>
              <div className="formDiv">
                <label>Height: </label>
                <input
                  type="number"
                  value={input.height}
                  name="height"
                  onChange={(e) => handleChange(e)}
                  style={
                    input.height.length
                      ? errors.height
                        ? { borderColor: "#e74c3c" }
                        : { borderColor: "#2ecc71" }
                      : {}
                  }
                />
                {errors.height ? (
                  <div>
                    <i
                      className="fas fa-exclamation-circle"
                      style={{ color: "#e74c3c" }}
                    ></i>
                    <p>{errors.height}</p>
                  </div>
                ) : input.height.length ? (
                  <i
                    className="fas fa-check-circle"
                    style={{ color: "#2ecc71" }}
                  ></i>
                ) : (
                  <i></i>
                )}
              </div>
              <div className="formDiv">
                <label>Imagen: </label>
                <input
                  type="file"
                  name="img"
                  accept="image/*"
                  value={input.img}
                  onChange={(e) => handleChange(e)}
                  style={
                    input.img.length
                      ? errors.img
                        ? { borderColor: "#e74c3c" }
                        : { borderColor: "#2ecc71" }
                      : {}
                  }
                />
                {errors.img ? (
                  <div>
                    <i
                      className="fas fa-exclamation-circle"
                      style={{ color: "#e74c3c" }}
                    ></i>
                    <p>{errors.img}</p>
                  </div>
                ) : input.img.length ? (
                  <i
                    className="fas fa-check-circle"
                    style={{ color: "#2ecc71" }}
                  ></i>
                ) : (
                  <i></i>
                )}
              </div>
              <div className="selectsForm">
                <select
                  className="selectForm"
                  onChange={(e) => handleChange(e)}
                >
                  <option value="Types">Types</option>
                  {types.map((type) => {
                    return (
                      <option key={type.id} value={type.name}>
                        {type.name}
                      </option>
                    );
                  })}
                </select>
                <select
                  className="selectForm"
                  onChange={(e) => handleChange(e)}
                >
                  <option value="Types">Types</option>
                  {types.map((type) => {
                    return (
                      <option key={type.id} value={type.name}>
                        {type.name}
                      </option>
                    );
                  })}
                </select>
                {errors.types ? (
                  <div className="typeserror">
                    <i
                      className="fas fa-exclamation-circle"
                      style={{ color: "#e74c3c" }}
                    ></i>
                    <span>{errors.types}</span>
                  </div>
                ) : (
                  <i></i>
                )}
              </div>
              <div className="Container">
                <button className="create" type="submit">
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
