import React, { useState } from "react";
import Cards from "./components/Cards";
import Header from "./components/Header";
import BackDropBox from "./services/BackDropService";
import "./App.css";

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [backDrop, setBackDrop] = useState(false);

  const startGame = () => {
    setGameStarted(true);
  };

  const endGame = () => {
    setBackDrop(true);
    setGameStarted(false);

    setTimeout(() => {
      setBackDrop(false);
    }, 1000);
  };

  return (
    <section>
      <BackDropBox open={backDrop} message="Você Venceu!" />
      <Header startGame={startGame} gameStarted={gameStarted} />
      <Cards gameStarted={gameStarted} endGame={endGame} />
    </section>
  );
}

export default App;
