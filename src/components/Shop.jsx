import React from "react";
import Footer from "../footer/Footer";
// @ts-ignore
import shop from "./shop.module.css";
import ProductList from "./ProductList";
import { useState } from "react";
import { useEffect } from "react";

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleProductLoad = (product) => {
    console.log("Product loaded:", product);
  };
  return (
    <div>
      <List />
      <h1 className={shop.h1}>All Our Products</h1>
      <ProductList products={products} onLoad={handleProductLoad} />
      <Footer />
    </div>
  );
}

function List() {
  return (
    <div>
      <div className={shop.shop}>
        <img src="/pexels-sound-on-3394660.jpg" alt="" />
        <div className={shop.parag}>PRODUCTS</div>
        <div className={shop.text}>Shop List</div>
      </div>
    </div>
  );
}

export default Shop;
