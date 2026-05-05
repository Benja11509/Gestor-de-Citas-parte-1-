import Cita from "./Cita";
import "./ListaCitas.css";

const ListaCitas = ({ citas, eliminarCita }) => {
  return (
    <>
      <h2>Administra tus citas</h2>

      {citas.length === 0 ? (
        <p>No hay citas</p>
      ) : (
        citas.map((cita) => (
          <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
        ))
      )}
    </>
  );
};

export default ListaCitas;