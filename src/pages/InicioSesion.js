import React, { useState,} from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para navegación programática
import api from '../api/config'; // Asegúrate de importar tu instancia de Axios configurada
import Footer from '../components/Footer';
import Header from '../components/Header';

const InicioSesion = () => {
  const [formData, setFormData] = useState({ correoElectronico: '', contrasena: '' });
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/api/login', formData);
      const userData = response.data; // Datos del usuario autenticado
      console.log('User Data:', userData); // Para depuración

      const { id, nombreCompleto, correoElectronico: email } = userData;

      // Guardar el indicador de autenticación en localStorage
      localStorage.setItem('auth', 'yes');
      localStorage.setItem('user', JSON.stringify({ id, nombreCompleto, correoElectronico: email }));

      setError('');
      setFormData({ correoElectronico: '', contrasena: '' });
      // Redirigir a MiPagina después de la autenticación exitosa
      navigate ('/MiPagina');
    } catch (err) {
      console.error(err);
      setError('Credenciales incorrectas. Inténtalo de nuevo.');
    }
  };


return (
  <div className="form-container">
    <Header />
    <h2>Inicio en Orbe_Emprende</h2>
    <form onSubmit={handleSubmit} className="formulario">
      <div className="form-group">
        <input
          type="email"
          name="correoElectronico"
          placeholder="CorreoElectronico"
          value={formData.correoElectronico}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          name="contrasena"
          placeholder="Contrasena"
          value={formData.contrasena}
          onChange={handleChange}
          required
        />
      </div>
      {error && <p className="error">{error}</p>}
      <div className="form-group button-group">
        <button className="boton2" type="submit">Iniciar Sesión</button>
      </div>
    </form>
    <a href="/">Regresar</a>
    <Footer />
  </div>
);
};

export default InicioSesion;
