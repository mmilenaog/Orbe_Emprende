import React from "react";
import { Link } from "react-router-dom";
import Navhome from "../components/Navhome";
import Footerhome from "../components/Footerhome";
import Deletrear from "../components/Deletrear";
import "../styles/home.css";
import pegaso1 from '../imagens/pegaso1.png';

export default function Home() {
    return (
        <div className="divHome">
            <Navhome />
            <div className="contenedorPrimario">
                <h1>Orbe - Un mundo de oportunidades</h1>
                <p className="parrafo1">¿Estás listo para llevar tus ideas al siguiente Nivel? ¡Estás en el lugar correcto! <br/>
                    Aquí econtrarás todo lo relacionado con el crecimiento de tu negocio y te sumergirás en una experiencia única de aprendizaje
                    con emocionantes desafíos y recompensas. <br/>
                    Orbe está diseñada para mantenerte motivado y comprometido en cada paso de tu viaje emprendedor. <br/>
                    ¿Qué esperas? Únete a nuestro ecosistema de soñadores y hagamos magia juntos
                </p>
            </div>
            <Deletrear />
            <div className="contenedorBotones">
                <Link to="/Registro"><button className="button1">Registro</button></Link>
                <Link to="/InicioSesion"><button className="button1">Inicio de sesión</button></Link>
            </div>
            <div className="contenedorlienzo">
                <div className="lienzo">
                    <img className="imagen" src={pegaso1} alt="img"/>
                </div>
            </div>
            <Footerhome />
        </div>
    );
};
