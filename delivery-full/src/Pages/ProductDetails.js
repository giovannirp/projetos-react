import React from "react";
import { useParams } from "react-router";
import { useFetch } from "../hooks/useFetch";
import "./ProductDetails.scss";

export default function ProductDetails() {
  const { id } = useParams();

  const url = "http://localhost:3000/products/" + id;

  const { data: product, loading, error } = useFetch(url);

  console.log(product);

  return (
    <main>
      <div className="product-details">
        <h1>Detalhes de produtos</h1>
        <p className="tit-product"><strong>O Id do produto é: </strong> {id} </p>
        {product && (
          <div>
            <h1>{product.titulo}</h1>
            <img src={product.img} alt={product.titulo} />
            <p>
                {product.texto}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
