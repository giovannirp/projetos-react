import React, { useEffect, useState } from "react";
import Boxes from "../Components/Boxes";
import "./Home.scss";
import MacarraoInst from "../Components/MacarraoInst";
// import { useFetch } from "./hooks/useFetch";
import { useFetch } from "../hooks/useFetch";
const url = "http://localhost:3000/products";
const urlMac = "http://localhost:3000/macarrao";

export default function Home() {
  const { data: items } = useFetch(url);

  const [products, setProducts] = useState([]);
  const [mac, setMac] = useState([]);

  useEffect(() => {
    async function fetchDataMac() {
      const res = await fetch(urlMac);

      const data = await res.json();
      setMac(data);
    }

    fetchDataMac();
  }, []);

  return (
    <main>
      <div className="home">
        <h1>Painel de lanches</h1>
        <div className="boxes">
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
        <hr />
        <div>
          <h1>Macarrão instantâneo</h1>
          <div className="macaraInst">
            {mac.map((macList) => (
              <MacarraoInst
                key={macList.id}
                titulo={macList.titulo}
                img={macList.img}
                textoLink={macList.textoLink}
                link={macList.link}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
