import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Quiz = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({
    answer1: '',
    answer2: '',
    answer3: ''
  });
  const [showResults, setShowResults] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers({ ...answers, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Verificar respuestas aquí
    if (answers.answer1 === 'Río Magdalena' && answers.answer2 === 'Medellín' && answers.answer3 === 'Gabriel García Márquez') {
      // Todas las respuestas son correctas, redirigir
      window.location.href = 'https://colombia.endeavor.org/perspectivas-y-tendencias-de-emprendimiento-2024/';
    } else {
      // Mostrar mensaje de respuestas incorrectas, opcional
      setShowResults(true);
    }
  };

  return (
    <div className="quiz-container">
     
      <form onSubmit={handleSubmit}>
        <div className="question">
          <label>Pregunta 1: ¿Cuál es el río más largo de Colombia?</label>
          <input
            type="text"
            name="answer1"
            value={answers.answer1}
            onChange={handleChange}
            required
          />
          <br/><br/>

        </div>
        <div className="question">
          <label>Pregunta 2: ¿Qué ciudad es conocida como "La Ciudad de la Eterna Primavera?</label>
          <input
            type="text"
            name="answer2"
            value={answers.answer2}
            onChange={handleChange}
            required
          />
          <br/><br/>
        </div>
        <div className="question">
          <label>Pregunta 3: ¿Cuál es el nombre del escritor colombiano que ganó el Premio Nobel de Literatura en 1982?</label>
          <input
            type="text"
            name="answer3"
            value={answers.answer3}
            onChange={handleChange}
            required
          />
          <br/><br/>
        </div>
        {showResults && <p>Respuestas incorrectas. Inténtalo de nuevo.</p>}
        <button type="submit">Enviar Respuestas</button>
      </form>
    </div>
  );
};

export default Quiz;