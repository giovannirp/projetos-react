import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import Nav from "./Nav";

function Header() {
  return (
    <>
      <header className="header">
        <div className="containerHeader">
          <h1>
            <Link to="/">Delivery</Link>
          </h1>
        </div>
      </header>
      <Nav />
    </>
  );
}

export default Header;
