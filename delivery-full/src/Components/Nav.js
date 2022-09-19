import React from "react";
import { Link } from 'react-router-dom';
import "./Nav.scss";

export default function Nav() {
  return (
    <nav>
      <div className="containerNav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
