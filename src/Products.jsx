import React, { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Products.css";

const Products = memo(() => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="products-container">

      <h2 className="title">Products</h2>

      <div className="product-grid">

        {products.map((p) => (
          <Link
            to={`/products/${p.id}`}
            key={p.id}
            className="product-card"
          >

            <img src={p.image} alt={p.title} />

            <h4>{p.title.substring(0, 40)}...</h4>

            <p className="price">$ {p.price}</p>

          </Link>
        ))}

      </div>

    </div>
  );
});

export default Products;