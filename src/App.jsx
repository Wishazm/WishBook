import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Shop from "./components/Shop";
import Menu from "./components/Menu";
import { useState } from "react";
import axios from "axios";
import Login from "./login/Login";
import Signup from "./login/Signup";
import Admin from "./admin/Admin";
import Product from "./components/Product";
import Cart from "./components/Cart";
// @ts-ignore
import styles from "./app.module.css";

function App() {
  const [product, setProduct] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const fetchProducts = () => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => setProduct(res.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className={styles.background}>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/About" element={<About />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/admin" element={<Admin />} />
          <Route
            path="/Cart"
            element={
              <Cart
                // @ts-ignore
                cartItems={cartItems}
              />
            }
          />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
