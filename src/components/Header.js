import React from "react";
import Button from "@material-ui/core/Button";

const Header = ({ startGame, gameStarted }) => {
  return (
    <div className="header">
      <div className="header__title">Jogo da Memória</div>
      <div className="header__button">
        <Button variant="contained" onClick={startGame} disabled={gameStarted}>
          Iniciar
        </Button>
      </div>
    </div>
  );
};

export default Header;
