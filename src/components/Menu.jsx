import React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Shop from "./Shop";
// @ts-ignore
import styles from "./menu.module.css";
import Cart from "./Cart";

function Menu() {
  return (
    <>
      <div className={styles.menu}>
        <div className={styles.logodiv}>
          <img className={styles.logo} src="/logo.png" alt="" />
          <h1>WishBook</h1>
        </div>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Shop">Shop</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Cart">Cart</Link>
          </li>
          <button className={styles.contactBtn}>Contact Us</button>
        </ul>
      </div>
    </>
  );
}
export default Menu;
