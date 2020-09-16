import React, { useState, useEffect } from "react";
import Card from "./Card";
import { gameCards } from "../services/gameCards";

const Cards = ({ gameStarted, endGame }) => {
  const [turn, setTurn] = useState([]);
  const [lastCard, setLastCard] = useState("");
  const [successCards, setSuccessCards] = useState([]);
  const [cardsToRotateBack, setsCardsToRotateBack] = useState([]);

  useEffect(() => {
    if (turn.length > 1) setTurn([]);
  }, [turn]);

  useEffect(() => {
    if (successCards.length === 12) endGame();
  }, [successCards]);

  const clearCardsToRotate = () => {
    setsCardsToRotateBack([]);
  };

  const isSecondTurn = () => {
    setTurn([...turn, 1]);
    return turn.length;
  };

  const isTheSameCard = (lastCard, value) => {
    return lastCard.id === value.id;
  };

  const checkIfMatch = (lastCard, value) => {
    if (lastCard.card === value.card) {
      setSuccessCards([...successCards, value.card]);
    } else {
      setsCardsToRotateBack([lastCard.card, value.card]);
    }
  };

  const handleCard = (card) => {
    setLastCard(card);
  };

  return (
    <>
      {gameStarted ? (
        <div className="tableCards">
          {gameCards.map((c, i) => (
            <div className="cardPosition" key={i}>
              <Card
                value={c}
                isSecondTurn={isSecondTurn}
                isTheSameCard={isTheSameCard}
                checkIfMatch={checkIfMatch}
                handleCard={handleCard}
                successCards={successCards}
                lastCard={lastCard}
                cardsToRotateBack={cardsToRotateBack}
                clearCardsToRotate={clearCardsToRotate}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="tableClosed">
          <img src="/img/closed.jpg" width="700" alt="Game Closed" />
        </div>
      )}
    </>
  );
};

export default Cards;
