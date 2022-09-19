import React from "react";
import { Link } from "react-router-dom";

function Boxes(props) {
  return (
    <>
      <div className="box">
        <img src={props.img} alt="" />
        <p>{props.titulo}</p>
        <Link to={props.linkDetalhes}>Veja mais</Link>
      </div>
    </>
  );
}

export default Boxes;