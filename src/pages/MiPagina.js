import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import api from '../api/config';
import Quiz from '../components/Quiz';
import Memoria from '../components/Memoria';
import "../styles/mipagina.css";

const MiPagina = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false); // E
  const [showMemoria, setShowMemoria] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user || !user.correoElectronico) {
          console.error('No user data in localStorage');
          return navigate('/iniciosesion');
        }

        const response = await api.get('/api/users/me', {
          params: { correoElectronico: user.correoElectronico }
        });

        console.log('User Data:', response.data); // Para depuración
        setUserData(response.data);
      } catch (error) {
        console.error('Error al cargar los datos del usuario:', error.response ? error.response.data : error.message);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('auth');
    localStorage.removeItem('user');
    navigate('/iniciosesion');
  };

  const handleModifyUser = () => {
    navigate('/modificar-usuario');
  };

  const handleDeleteUser = async () => {
    try {
      const confirmDelete = window.confirm('¿Estás seguro de que deseas eliminar tu cuenta? Esta acción no se puede deshacer.');

      if (confirmDelete) {
        await api.delete(`/api/users/${userData.id}`);
        localStorage.removeItem('auth');
        localStorage.removeItem('user');
        navigate('/iniciosesion');
      }
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
    }
  };

 const toggleQuiz = () => {
    setShowQuiz(!showQuiz); // Cambiar el estado de mostrar/ocultar el quiz
  };

const toggleMemoria = () => {
    setShowMemoria(!showMemoria); // Cambiar el estado de mostrar/ocultar el juego de memoria
    setShowQuiz(false); // Asegurarse de ocultar el quiz
  };

  return (
    <div className="mi-pagina-container">
      <Header />
      <div className="content">
        <div className="sidebar">
          
           <ul className="sidebar-links">
            <li><a href="/iniciosesion">Principal</a></li>
            <li><a href="#" onClick={handleLogout}>Cerrar sesión</a></li>            
            <li><a href="#" onClick={handleModifyUser}>Modificar datos</a></li>
            <li><a href="#" onClick={handleDeleteUser}>Eliminar cuenta</a></li>
          </ul>
          <h3>Usuario</h3>
          {userData ? (
            <div className="user-details">
              <p><strong>ID:</strong> {userData.id}</p>
              <p><strong>Correo Electrónico:</strong> {userData.correoElectronico}</p>
            </div>
          ) : (
            <p>Cargando datos del usuario...</p>
          )}
        </div>
        <div className="main-content">
          <div className="welcome-message">
            <h2>Bienvenido, {userData && userData.nombreCompleto ? userData.nombreCompleto : 'Cargando...'}</h2>
          </div>
          <br/><br/>
          <div>
          <h2 className='Emp1'>El Emprendimiento en Colombía</h2>
          <br/><br/>
          <p>Quieres saber como anda el emprendimiento en Colombia?</p>
          <p>Responde las tres preguntas y Orbe te cuenta...</p>
          <button onClick={toggleQuiz}>
            {showQuiz ? 'Ocultar Quiz' : 'Mostrar Quiz'}
          </button>
          {/* Mostrar el componente Quiz si showQuiz es true */}
          {showQuiz && <Quiz />}
          </div>
          <br/><br/>
          <div>
          <h2 className='Emp2'>Acerca de la Mujer Emprendedora</h2>
          <br/><br/>
          <p>En colombia se puede emprender siendo mujer?</p>
          <p>Armas las 4 parejas y Orbe te cuenta...</p>
          <button onClick={toggleMemoria}>
              {showMemoria ? 'Ocultar Memoria' : 'Mostrar Memoria'}
            </button>
            <br/><br/>
          {/* Mostrar el componente MemoryGame si showMemoryGame es true */}
           {showMemoria && <Memoria />}
          </div>
         </div>
      </div>
      <Footer />
    </div>
  );
};

export default MiPagina;