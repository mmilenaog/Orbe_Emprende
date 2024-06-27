import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import IngresoAdministrativo from './pages/IngresoAdministrativo';
import InicioSesion from './pages/InicioSesion';
import MiPagina from './pages/MiPagina';
import Registro from './pages/Registro';
 // Asegúrate de ajustar la ruta según tu estructura de archivos

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/ingresoadministrativo" element={<IngresoAdministrativo />} />
        <Route path="/iniciosesion" element={<InicioSesion />} />
        <Route path="/mipagina" element={<MiPagina />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </Router>
  );
};

export default App;