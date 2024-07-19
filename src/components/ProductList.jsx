import React from "react";
import { Link } from "react-router-dom";
// @ts-ignore
import list from "./productList.module.css";

const ProductList = ({ products, onLoad, displayCount }) => {
  const displayedProducts = products.slice(0, displayCount);

  return (
    <div className={list.productDetails}>
      <div className={list.cardContainer}>
        {displayedProducts.map((product) => (
          <div
            className={list.card}
            key={product.id}
            onClick={() => onLoad(product)}
          >
            <Link to={`/product/${product.id}`}>
              <img className={list.imgs} src={product.image} alt="" />
            </Link>
            <h3>{product.name}</h3>
            <button onClick={() => onLoad(product)}>Download Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
