import { useState } from "react";
import Formulario from "./components/Formulario.jsx";
import ListaCitas from "./components/ListaCitas.jsx";
import "./App.css";

function App() {
  const [citas, setCitas] = useState([]);

  // agregar cita
  const agregarCita = (cita) => {
    setCitas([...citas, cita]);
  };

  // eliminar cita con confirm
  const eliminarCita = (id) => {
    const confirmar = window.confirm("¿Eliminar cita?");
    if (confirmar) {
      const nuevasCitas = citas.filter((cita) => cita.id !== id);
      setCitas(nuevasCitas);
    }
  };

return (
  <div>
    <h1>ADMINISTRADOR DE PACIENTES</h1>

    <div className="container">
      <div className="row">

        <div className="one-half">
          <Formulario agregarCita={agregarCita} />
        </div>

        <div className="one-half">
          <ListaCitas citas={citas} eliminarCita={eliminarCita} />
        </div>

      </div>
    </div>
  </div>
);
}

export default App;