import React from "react";
import { Link } from "react-router-dom";

function Boxes(props) {
  return (
    <>
      <div className="box">
        <Link className="linkBoxHome" to={props.linkDetalhes}>
          <img src={props.img} alt="" />
        </Link>
        <p>{props.titulo}</p>
        <Link to={props.linkDetalhes}>Veja mais</Link>
      </div>
    </>
  );
}

export default Boxes;