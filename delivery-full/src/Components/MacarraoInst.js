import React from "react";
import "./MacarraoInst.scss";

export default function MacarraoInst(props) {
  return (
    <div className="box">
      <img src={props.img} alt="" />
      <p>{props.titulo}</p>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        {props.textoLink}
      </a>
    </div>
  );
}
