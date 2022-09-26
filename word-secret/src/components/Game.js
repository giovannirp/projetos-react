import React from 'react'
import "./Game.css";

export default function Game(props) {
  return (
    <div>
    <h1>Game</h1>
    <button onClick={props.verifyLetter}>Finalizar o jogo</button>
  </div>
  )
}
