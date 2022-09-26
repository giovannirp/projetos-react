import React, { useState } from "react";
import "./Contato.scss";

const url = "http://localhost:3000/contato";

export default function Contato() {
  const [contato, setContato] = useState([]);

  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");

  const clearInputs = () => {
    setNome("");
    setTelefone("");
    setMensagem("");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const contato = {
      nome,
      telefone,
      mensagem
    }

    const res = await fetch("http://localhost:3000/contato", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(contato)
    });

    const addContato = await res.json();

    clearInputs();
  }

  return (
    <main>
      <div className="contato">
        <h1>Contato</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </label>
          <label>
            Telefone:
            <input
              type="text"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
          </label>
          <label>
            Mensagem:
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
