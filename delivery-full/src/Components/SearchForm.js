import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchForm.scss";

export default function SearchForm() {
  const navigate = useNavigate();
  const [query, setQuery] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/search?q=" + query);
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setQuery(e.target.value)} required />
        <input type="submit" value="Buscar" />
      </form>
    </div>
  );
}
