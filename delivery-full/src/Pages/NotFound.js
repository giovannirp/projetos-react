import React from "react";
import "./NotFound.scss";
import ImgNot from "../assets/img/404.PNG";

export default function NotFound() {
  return (
    <main>
      <div className="notFound">
        <h1>Página não encontrada</h1>
        <div className="contentnotFound">
          <img src={ImgNot} alt="not found" />
        </div>
      </div>
    </main>
  );
}
