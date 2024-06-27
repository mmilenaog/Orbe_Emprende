import React from "react";
import { Link } from "react-router-dom";
import logo from "../imagens/logo_Orbe.png"; 
import "../styles/header.css"; 

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>
      <nav className="nav">
       
      </nav>
    </header>
  );
};

export default Header;