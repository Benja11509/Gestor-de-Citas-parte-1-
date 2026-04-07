import { useState } from "react";
import Header from "./components/Header"; 
import Contenedor from "./components/Contenedor.jsx";
import "./App.css";

function App() {
  const [citas] = useState([
    {
      mascota: "Charva",
      propietario: "Julian",
      fecha: "2021-08-05",
      hora: "08:20",
      sintomas: "Le duele la cabeza "
    }
  ]);


  return (
    <>
      <Header />
      <Contenedor citas={citas} />
    </>
  );
}

export default App;