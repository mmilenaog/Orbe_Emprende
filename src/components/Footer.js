/* componente para importar iconos de redes sociales y linea de información al footer de Home  */

import "../styles/footerhome.css";
import { FaGoogle, FaTwitter, FaWhatsapp, FaYoutube, FaFacebook} from "react-icons/fa";


export default function Footerhome() {
  const year = new Date().getFullYear();

  return (

    <footer>
      <div className="contenedorFooterHome">
        <h4>
          {`Copyright © Todos los derechos Reservados-ORBE-Emprende.com ${year}`}
        </h4>
      </div>
    </footer>
  )
};
