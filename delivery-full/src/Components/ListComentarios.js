import React from "react";
import { useState, useEffect } from "react";
import "./ListComentarios.scss";
const url = "http://localhost:3000/comentarios";

export default function ListComentarios() {
  const [listComent, setListComent] = useState([]);

  useEffect(() => {
    async function fetchDatComentario() {
      const res = await fetch(url);

      const data = await res.json();
      console.log(data);
      setListComent(data);
    }
    fetchDatComentario();
  }, []);
  return (
    <main>
      <div className="listComentarios">
        <h1>Lista de todos os comentários</h1>
        {listComent.map((listComent, index) => (
          <div key={index}>
            <div className="divList" >
              <div className="content-list">
                <strong>Nome: </strong>
                {listComent.nome}
              </div>
              <div className="content-list">
                <strong>Email: </strong> {listComent.email}
              </div>
              <div className="content-list">
                <strong>Comentários: </strong> {listComent.comentario}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
