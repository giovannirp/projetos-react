import React from "react";
import { useSearchParams, Link } from "react-router-dom";
import Boxes from "../Components/Boxes";
import { useFetch } from "../hooks/useFetch";
import "./SearchPage.scss";

export default function Search() {
  const [searchParams] = useSearchParams();

  const url = "http://localhost:3000/products?" + searchParams;

  const { data: items, loadin, error } = useFetch(url);
  console.log(items);
  return (
    <main>
      <div className="searchPage">
        <h1>Resultados disponíveis</h1>
        <div className="boxes">
          <p className="mensagemFull">
            {items && items.length === 0 && "Não existe, nehuma informação"}
          </p>
          {items &&
            items.map((list) => (
              <Boxes
                key={list.id}
                titulo={list.titulo}
                img={list.img}
                textoLink={list.textoLink}
                link={list.link}
                linkDetalhes={`/products/${list.id}`}
              />
            ))}
        </div>
      </div>
    </main>
  );
}
