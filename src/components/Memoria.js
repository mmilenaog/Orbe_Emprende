import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/memoria.css"; // Ajusta la ruta según tu estructura de archivos


const Memoria = () => {
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    const cardValues = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D'];
    const shuffledCards = shuffleArray(cardValues.map((value, index) => ({ id: index, value, flipped: false })));
    setCards(shuffledCards);
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleCardClick = (index) => {
    if (disabled || flippedCards.includes(index) || matchedPairs.includes(index)) return;

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setDisabled(true);
      setTimeout(() => {
        checkForMatch(newFlippedCards);
      }, 1000);
    }
  };

  const checkForMatch = (newFlippedCards) => {
    const [firstIndex, secondIndex] = newFlippedCards;
    if (cards[firstIndex].value === cards[secondIndex].value) {
      setMatchedPairs([...matchedPairs, firstIndex, secondIndex]);
      if (matchedPairs.length + 2 === cards.length) {
        window.location.href = 'https://www.semana.com/economia/capsulas/articulo/asi-fue-la-feria-del-emprendimiento-femenino-en-colombia/202411/';
      }
    }
    setFlippedCards([]);
    setDisabled(false);
  };

  const resetGame = () => {
    initializeGame();
    setFlippedCards([]);
    setMatchedPairs([]);
    setDisabled(false);
  };

  return (
    <div className="memory-game">
      <div className="game-board">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`card ${flippedCards.includes(index) || matchedPairs.includes(index) ? 'flipped' : ''}`}
            onClick={() => handleCardClick(index)}
          >
            {flippedCards.includes(index) || matchedPairs.includes(index) ? (
              <div className="card-content">{card.value}</div>
            ) : (
              <div className="card-back" />
            )}
          </div>
        ))}
      </div>
      <button className="reset-button" onClick={resetGame}>Reiniciar Juego</button>
    </div>
  );
};

export default Memoria;