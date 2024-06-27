/* componente para el header de Home  */
import "../styles/navhome.css";
import { Link } from "react-router-dom";

export default function Navhome() {
  return (
    <nav className="navhome">
      <div className="containerNavhome">
        <img 
        className="imagenNavhome" 
        src={require("../imagens/logo_Orbe.png")}
        alt="imagen ORBE" />
          <Link to="/IngresoAdministrativo"><button className="button">Ingreso Administrativo</button></Link>
      </div>
    </nav>
  );
};