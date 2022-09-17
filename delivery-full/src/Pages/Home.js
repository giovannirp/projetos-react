import React, { useEffect, useState } from "react";
import Boxes from "../Components/Boxes";
import "./Home.scss";
import MacarraoInst from "../Components/MacarraoInst";
const url = "http://localhost:3001/products";
const urlMac = "http://localhost:3001/macarrao";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [mac, setMac] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);

      const data = await res.json();
      setProducts(data);
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchDataMac() {
      const res = await fetch(urlMac);

      const data = await res.json();
      console.log(data);
      setMac(data);
    }

    fetchDataMac();
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
  );
}
