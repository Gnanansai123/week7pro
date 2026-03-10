import React from "react";
import { useParams, Routes, Route, Link } from "react-router-dom";

function Reviews() {
  return <p>⭐ Customer Reviews for this product</p>;
}

function ProductDetails() {

  const { id } = useParams();

  return (
    <div>

      <h3>Product ID: {id}</h3>

      <Link to="reviews">View Reviews</Link>

      <Routes>
        <Route path="reviews" element={<Reviews />} />
      </Routes>

    </div>
  );
}

export default ProductDetails;