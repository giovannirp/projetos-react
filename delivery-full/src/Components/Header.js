import React from "react";
import "./Header.scss";
import Nav from "./Nav";

function Header() {
  return (
    <>
      <header className="header">
        <div className="containerHeader">
          <h1>Delivery</h1>
        </div>
      </header>
      <Nav />
    </>
  );
}

export default Header;
