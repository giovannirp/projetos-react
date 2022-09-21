import React from "react";
import { useSearchParams, Link } from "react-router-dom";
import Boxes from "../Components/Boxes";
import { useFetch } from "../hooks/useFetch";
import "./Search.scss";

export default function Search() {
  const [searchParams] = useSearchParams();

  const url = "http://localhost:3000/products?" + searchParams;

  const { data: items, loadin, error } = useFetch(url);

  return (
    <div>
      <h1>Resultados disponíveis</h1>
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
  );
}
