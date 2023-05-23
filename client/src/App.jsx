import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Landing, Home, Detail, Form } from "./views/index";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
