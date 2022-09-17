import React from "react";

function Boxes(props) {
  return (
    <>
      <div className="box">
        <img src={props.img} alt="" />
        <p>{props.titulo}</p>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          {props.textoLink}
        </a>
      </div>
    </>
  );
}

export default Boxes;