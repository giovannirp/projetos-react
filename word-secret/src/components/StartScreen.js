import React from "react";
import "./StartScreen.css";

export default function StartScreen(props) {
  return (
    <div className="start">
      <h1>Secret Word</h1>
      <p>Clique no bota abaixo para começar o jogo</p>
      <button onClick={props.startGame}>Abrir o Jogo</button>
    </div>
  );
}
