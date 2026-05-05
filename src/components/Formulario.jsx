import { useState } from "react";
import "./Formulario.css";

const Formulario = ({ agregarCita }) => {
  const [cita, setCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: ""
  });

  const handleChange = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    agregarCita({
      ...cita,
      id: Date.now()
    });

    setCita({
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: ""
    });
  };

  return (
    <>
      <h2>Crear mi Cita</h2>

      <form onSubmit={handleSubmit}>
        <label>Nombre Mascota</label>
        <input name="mascota" className="u-full-width" onChange={handleChange} value={cita.mascota} />

        <label>Nombre Dueño</label>
        <input name="propietario" className="u-full-width" onChange={handleChange} value={cita.propietario} />

        <label>Fecha</label>
        <input type="date" name="fecha" className="u-full-width" onChange={handleChange} value={cita.fecha} />

        <label>Hora</label>
        <input type="time" name="hora" className="u-full-width" onChange={handleChange} value={cita.hora} />

        <label>Síntomas</label>
        <textarea name="sintomas" className="u-full-width" onChange={handleChange} value={cita.sintomas} />

        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </>
  );
};

export default Formulario;