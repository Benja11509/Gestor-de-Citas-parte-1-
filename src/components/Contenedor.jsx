import "./Contenedor.css";

import Formulario from "./Formulario";
import Listado from "./Listado";

function Contenedor({ citas }) {
  return (
    <div className="container">
      <div className="row">
        <Formulario />
        <Listado citas={citas} />
      </div>
    </div>
  );
}

export default Contenedor;