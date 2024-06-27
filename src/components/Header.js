import React from "react";
import { Link } from "react-router-dom";
import logo from "../imagens/logo_Orbe.png"; // Asegúrate de importar correctamente la ruta de tu logo
import "../styles/header.css"; // Ajusta la ruta según la ubicación de tus estilos

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>
      <nav className="nav">
        {/* Aquí agregarías tus elementos de navegación */}
      </nav>
    </header>
  );
};

export default Header;