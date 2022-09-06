import React from "react";
import Boxes from "../Components/Boxes";
import "./Home.scss";
import listBoxsNew from "../assets/date";

export default function Home() {
  return (
    <div className="home">
      <h1>Painel de lanches</h1>
      <div className="boxes">

        {listBoxsNew.map((list) => (
          <Boxes
            key={list.id}
            titulo={list.titulo}
            img={list.img}
            textoLink={list.textoLink}
          />

        ))}
      </div>
    </div>
  );
}
