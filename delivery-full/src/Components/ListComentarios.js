import React from "react";
import { useState, useEffect } from "react";
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
      <div>
        <h1>Lista de todos os comentários</h1>
        {listComent.map((listComent) => (
          <div>
            <div>Nome: {listComent.nome}</div>
            <div>Email: {listComent.email}</div>
            <div>Comentários: {listComent.comentario}</div>
            <hr />
          </div>
        ))}
      </div>
    </main>
  );
}
