import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
// @ts-ignore
import prod from "./product.module.css";
import Footer from "../footer/Footer";
import ProductList from "./ProductList";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const fetchProducts = () => {
    axios
      .get(`http://localhost:3000/products/${id}`)
      .then((res) => setProduct(res.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleProductLoad = (product) => {
    console.log("Product loaded:", product);
  };

  useEffect(() => {
    // Fetch data from the JSON file
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

  const addToCart = () => {
    const { name, description, price } = product;
    const newItem = { name, description, price };
    setCartItems([...cartItems, newItem]);
  };

  return (
    <>
      <div>
        <h1>Product Details</h1>
      </div>
      <div className={prod.details}>
        <div className={prod.imgDiv}>
          <img className={prod.img} src={product.image} alt="" />
        </div>
        <div className={prod.content}>
          <h1>{product.name}</h1>
          <span>Extra 5% off with coins</span>
          <p>{product.description}</p>
          <h3>{product.price} DH</h3>
          <div className={prod.incrementInput}>
            <input type="number" placeholder="1" /> <br />
            <button onClick={addToCart}>Download Now</button>
          </div>
        </div>
      </div>
      <div className={prod.related}>
        <h1>Some of Our Products</h1>
        <ProductList
          products={products}
          onLoad={handleProductLoad}
          displayCount={4}
        />
      </div>
      <Footer />
    </>
  );
}

export default Product;
