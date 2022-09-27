import React from "react";
import "./GameOver.css";

export default function GameOver(props, score) {
  return (
    <div>
      <h1>Fime de jogo</h1>
      <h2>A sua pontuação foi: <span>{props.score}</span></h2>
      <button onClick={props.retry}>Resetar jogo</button>
    </div>
  );
}
