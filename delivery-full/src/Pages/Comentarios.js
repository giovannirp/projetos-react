import React, {useState} from "react";
import ListComentarios from "../Components/ListComentarios";
import "./Comentarios.scss";

export default function Comentarios() {

  const [comentarios, setComentarios] = useState([]);
  
  const [values, setValues] = useState({});

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [comentario, setComentario] = useState("");

  const clearInputs = () => {
    setNome("");
    setEmail("");
    setComentario("");
  }

  const handleChangeName = (e) => {
    setNome(e.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const comentarios = {
      nome,
      email,
      comentario
    }

    const response = await fetch("http://localhost:3000/comentarios", {
      method: "POST",
      headers: {
        "Content-type" : "application/json"
      },
      body: JSON.stringify(comentarios)
    })

    const addComents = await response.json();

    setComentarios((prevComents) =>{ 
      console.log(prevComents)
      return [...prevComents, addComents];
    });

    clearInputs();
  };

  return (
    <main>
      <div className="comentarios">
        <h1>Comentários</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              value={nome}
              onChange={handleChangeName}
              id="nome"
              name="nome"
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
            />
          </div>
          <div className="form-text-area">
            <label htmlFor="comentario">Comentário:</label>
            <textarea value={comentario} id="comentario" onChange={(e) => setComentario(e.target.value)} cols="30" rows="10"></textarea>
          </div>
          <div className="form-control-button">
          <input type="submit" value="Enviar" />
          </div>
        </form>
        <hr />
        <ListComentarios />
      </div>
    </main>
  );
}
