import React from "react";
import "./Home.scss";
import foto1 from "../assets/img/foto1.jpg";
import foto2 from "../assets/img/foto2.jpeg";


export default function Home() {
  return (
    <div className="home">
      <h1>Painel de lanches</h1>
      <div className="boxes">
        <div className="box">
          <img src={foto1} alt="" />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Veja mais
          </a>
        </div>

        <div className="box">
          <img src={foto2} alt="" />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Veja mais
          </a>
        </div>

        <div className="box">
          <img src={foto1} alt="" />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Veja mais
          </a>
        </div>
      </div>
    </div>
  );
}
