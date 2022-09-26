import React from "react";
import "./GameOver.css";

export default function GameOver(props) {
  return (
    <div>
      <h1>Game Over</h1>
      <button onClick={props.retry}>Finalizar o jogo</button>
    </div>
  );
}
