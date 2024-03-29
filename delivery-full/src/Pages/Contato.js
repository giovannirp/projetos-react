import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { urlContato } from "../funcs/variable";
import "./Contato.scss";

export default function Contato() {
  const { data: items, httpConfig } = useFetch(urlContato);
  const [contato, setContato] = useState([]);

  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");

  const clearInputs = () => {
    setNome("");
    setTelefone("");
    setMensagem("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const contato = {
      nome,
      telefone,
      mensagem,
    };

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify(contato)
    // });

    // const addContato = await res.json();
    httpConfig(contato, "POST");

    clearInputs();
  };

  return (
    <main>
      <div className="contato">
        <h1>Contato</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome:</span>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </label>
          <label>
            <span>Telefone:</span>
            <input
              type="text"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
          </label>
          <label>
            <span>Mensagem:</span>
            <input
              type="text"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
            />
          </label>
          <input type="submit" value="Cadastrar" />
        </form>
      </div>
    </main>
  );
}
