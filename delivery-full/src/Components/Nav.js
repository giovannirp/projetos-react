import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.scss";

export default function Nav() {
  return (
    <nav>
      <div className="containerNav">
        <ul>
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? "link-ativo" : "link-desativo"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "link-ativo" : "link-desativo"
              }
            >
              Sobre
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contato"
              className={({ isActive }) =>
                isActive ? "link-ativo" : "link-desativo"
              }
            >
              Contato
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
