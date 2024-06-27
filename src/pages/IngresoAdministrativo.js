import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para navegación programática
import api from '../api/config'; // Asegúrate de importar tu instancia de Axios configurada
import Header from '../components/Header';

const IngresoAdministrativo = () => {
  const [formData, setFormData] = useState({
    correoElectronico: '',
    contraseña: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Utiliza useNavigate para navegación programática

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/login', formData); // Ruta y método de autenticación en tu API
      console.log(response.data); // Manejar la respuesta según la lógica de tu aplicación
      setError('');
      setFormData({ correoElectronico: '', contraseña: '' }); // Resetea los campos del formulario
      navigate('/dashboard'); // Navegar a la página de dashboard u otra página después de iniciar sesión
    } catch (err) {
      console.error(err);
      setError('Credenciales incorrectas. Inténtalo de nuevo.'); // Mensaje de error genérico para propósitos de demostración
    }
  };

  return (
    <div className="form-container">
      <Header />
      <h2>Ingreso Administrativo</h2>
      <form onSubmit={handleSubmit} className="formulario">
        <div className="form-group">
          <input
            type="email"
            name="correoElectronico"
            placeholder="Correo administrativo"
            value={formData.correoElectronico}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="contraseña"
            placeholder="Contraseña"
            value={formData.contraseña}
            onChange={handleChange}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <div className="form-group button-group">
          <button className="boton2" type="submit">Iniciar Sesion</button>
        </div>
      </form>
      <a href="/">Regresar</a>
    </div>
  );
};

export default IngresoAdministrativo;