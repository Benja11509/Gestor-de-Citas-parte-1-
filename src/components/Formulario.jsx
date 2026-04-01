import "./Formulario.css";

import CampoInput from "./CampoInput";

function Formulario() {
  return (
    <div className="one-half column">
      <h2>Crear mi Cita</h2>

      <form>
        <CampoInput label="Nombre Mascota" type="text" />
        <CampoInput label="Nombre Dueño" type="text" />
        <CampoInput label="Fecha" type="date" />
        <CampoInput label="Hora" type="time" />

        <label>Sintomas</label>
        <textarea className="u-full-width"></textarea>

        <button className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </div>
  );
}

export default Formulario;