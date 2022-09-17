import React, { useEffect, useState } from "react";
import Boxes from "../Components/Boxes";
import "./Home.scss";
import listBoxsNew from "../assets/date";
const url = "http://localhost:3001/products";


export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);

      const data = await res.json();
      console.log(data);
      setProducts(data)
    }

    fetchData();
  }, []);

  return (
    <div className="home">
      <h1>Painel de lanches</h1>
      <div className="boxes">

        {products.map((list) => (
          <Boxes
            key={list.id}
            titulo={list.titulo}
            img={list.img}
            textoLink={list.textoLink}
            link={list.link}
          />

        ))}
      </div>
    </div>
  );
}
