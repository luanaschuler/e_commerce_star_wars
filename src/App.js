import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";

const App = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("MY_E_CART"));
    if (cartItems !== null) setCart((prev) => [...prev, ...cartItems]);
  }, []);

  useEffect(() => {
    localStorage.setItem("MY_E_CART", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
          <Route path="/cart" element={<Checkout cart={cart} />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
