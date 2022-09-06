import React from "react";
import "./Nav.scss";

export default function Nav() {
  return (
    <nav>
      <div className="containerNav">
        <ul>
          <li>
            <a href="http://">Home</a>
          </li>
          <li>
            <a href="http://">Sobre</a>
          </li>
          <li>
            <a href="http://">Contato</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
