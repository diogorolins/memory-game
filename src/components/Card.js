import React, { useState } from "react";

const Card = ({
  value,
  isSecondTurn,
  isTheSameCard,
  checkIfMatch,
  handleCard,
  successCards,
  lastCard,
  cardsToRotateBack,
  clearCardsToRotate,
}) => {
  const [cardPosition, setCardPosition] = useState("card");

  const cardState = {
    card: "card",
    rotate: "card-rotate",
    done: "card-done",
  };

  if (cardsToRotateBack.includes(value.card)) {
    setTimeout(() => {
      setCardPosition(cardState["card"]);
      clearCardsToRotate();
    }, 600);
  }

  const isSuccessCard = successCards.includes(value.card);

  const turnCard = () => {
    setCardPosition(cardState["rotate"]);
    handleCard(value);
    if (!isTheSameCard(lastCard, value)) {
      if (isSecondTurn()) {
        checkIfMatch(lastCard, value);
      }
    }
  };

  return (
    <div className="card-container">
      {isSuccessCard ? (
        <div className={cardState["done"]}>
          <img src={`/img/sign/${value.card}.png`} alt="Signs" width="110" />
        </div>
      ) : (
        <div className={cardPosition} onClick={turnCard}>
          <div className="front">
            <div className="verde"></div>
          </div>
          <div className="back">
            <div className="vermelho">
              <img
                src={`/img/sign/${value.card}.png`}
                alt="Signs"
                width="110"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
