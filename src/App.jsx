import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";

import Home from "./Home";
import Products from "./Products";
import ProductDetails from "./ProductDetails";
import Contact from "./Contact";
import "./App.css";

function App() {

  const [login, setLogin] = useState(false);

  const ProtectedRoute = ({ children }) => {
    return login ? children : <Navigate to="/" />;
  };

  return (
    <BrowserRouter>

      <nav>
        <Link to="/">Home</Link> |
        <Link to="/products">Products</Link> |
        <Link to="/contact">Contact</Link>

        <button onClick={() => setLogin(!login)}>
          {login ? "Logout" : "Login"}
        </button>
      </nav>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />

        <Route path="/products/:id/*" element={<ProductDetails />} />

        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;