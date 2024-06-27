import React, { useState } from 'react';
import api from '../api/config'; // Importa la instancia de Axios configurada
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/registro.css';

const Registro = () => {
  const initialState = {
      nombreCompleto: "",
      localidad: "",
      nacionalidad: "",
      direccion: "",
      tipoDocumento: "",
      numeroDocumento: "",
      telefono: "",
      correoElectronico: "",
      contrasena: "",
      confirmarContrasena: ""
  };

  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      if (formData.contrasena !== formData.confirmarContrasena) {
          setError("Las contraseñas no coinciden");
          return;
      }

      try {
      const response = await api.post('api/users', formData);
      setSuccess(response.data.message);
      setError("");
      setFormData(initialState);

      setTimeout(() => {
        setSuccess('');
      }, 3000);
    } catch (err) {
      console.error(err);
      setError("Error al registrar usuario. Inténtalo de nuevo.");
    }
  };
  
  return (
      <div className="form-container">
        <Header />
        <h2>Registro de Usuario</h2>
          <form onSubmit={handleSubmit} className="formulario">
              <div className="form-group">
                  <input
                      type="text"
                      name="nombreCompleto"
                      placeholder="Nombre Completo"
                      value={formData.nombreCompleto}
                      onChange={handleChange}
                      required
                  />
              </div>
              <div className="form-group">
                  <select
                      name="localidad"
                      value={formData.localidad}
                      onChange={handleChange}
                      required
                  >
                      <option value="">Localidad</option>
                      <option value="Antonio Nariño">Antonio Nariño</option>
                      <option value="Barrios Unidos">Barrios Unidos</option>
                      <option value="Bosa">Bosa</option>
                      <option value="Chapinero">Chapinero</option>
                      <option value="Ciudad Bolívar">Ciudad Bolívar</option>
                      <option value="Engativa">Engativá</option>
                      <option value="Fontibon">Fontibón</option>
                      <option value="Kennedy">Kennedy</option>
                      <option value="La Candelaria">La Candelaria</option>
                      <option value="Los Martires">Los Mártires</option>
                      <option value="Puente Aranda">Puente Aranda</option>
                      <option value="Rafael Uribe Uribe">Rafael Uribe Uribe</option>
                      <option value="San Cristobal">San Cristóbal</option>
                      <option value="Santa Fe">Santa Fe</option>
                      <option value="Suba">Suba</option>
                      <option value="Sumapaz">Sumapaz</option>
                      <option value="Teusaquillo">Teusaquillo</option>
                      <option value="Tunjuelito">Tunjuelito</option>
                      <option value="Usaquen">Usaquén</option>
                      <option value="Usme">Usme</option>
                  </select>
              </div>
              <div className="form-group">
                  <input
                      type="text"
                      name="nacionalidad"
                      placeholder="Nacionalidad"
                      value={formData.nacionalidad}
                      onChange={handleChange}
                      required
                  />
              </div>
              <div className="form-group">
                  <input
                      type="text"
                      name="direccion"
                      placeholder="Dirección"
                      value={formData.direccion}
                      onChange={handleChange}
                      required
                  />
              </div>
              <div className="form-group">
                  <select
                      name="tipoDocumento"
                      value={formData.tipoDocumento}
                      onChange={handleChange}
                      required
                  >
                      <option value="">Tipo de documento</option>
                      <option value="Cedula de ciudadania">Cédula de ciudadanía</option>
                      <option value="Cedula de extranjeria">Cédula de extranjería</option>
                      <option value="Tarjeta de identidad">Tarjeta de identidad</option>
                      <option value="Otros">Otros</option>
                  </select>
              </div>
              <div className="form-group">
                  <input
                      type="text"
                      name="numeroDocumento"
                      placeholder="Número de documento"
                      value={formData.numeroDocumento}
                      onChange={handleChange}
                      required
                  />
              </div>
              <div className="form-group">
                  <input
                      type="tel"
                      name="telefono"
                      placeholder="Teléfono"
                      value={formData.telefono}
                      onChange={handleChange}
                      required
                  />
              </div>
              <div className="form-group">
                  <input
                      type="email"
                      name="correoElectronico"
                      placeholder="Correo electrónico"
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
              <div className="form-group">
                  <input
                      type="password"
                      name="confirmarContrasena"
                      placeholder="Confirmar Contrasena"
                      value={formData.confirmarContrasena}
                      onChange={handleChange}
                      required
                  />
              </div>
              {error && <p className="error">{error}</p>}
              {success && <p className="success">{success}</p>}
              <div className="form-group button-group">
                  <button className="boton2" type="submit">Registrarse</button>
              </div>
          </form>
          <a href="/">Regresar</a>
          <Footer />
      </div>
  );
};

export default Registro;