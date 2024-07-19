import React from "react";
import Footer from "../footer/Footer";
import about from "./about.module.css";
function About() {
  return (
    <div>
      <h1 className={about.header}>About Us</h1>
      <div className={about.container}>
        <h2 className={about.h2}>Our Idea</h2>
        <p>
          At WishBook, we believe that the joy of reading should be accessible
          to everyone. Our mission is to provide a comprehensive platform for
          discovering, downloading, and enjoying a wide range of books. Whether
          you're an avid reader looking for your next great read or someone
          seeking to explore new genres, WishBook is designed to cater to all
          your literary needs.
        </p>
        <h2 className={about.h2}>Our Purpose</h2>
        <p>
          Our purpose is to make reading more accessible and enjoyable. By
          offering a user-friendly interface and a vast library of books, we aim
          to bring readers and literature closer together. Inspired by the
          Arabic name <span className={about.oumnia}>"Oumnia"</span>, which
          signifies a desire or wish, our platform embodies the idea of
          fulfilling your reading wishes. We strive to turn your reading dreams
          into reality by providing a seamless experience for downloading books
          and exploring new literary adventures.
        </p>
        <a
          href="https://www.linkedin.com/in/oumnia-azmizem-767857245/"
          target="blank"
        >
          My LinkdIn Account
        </a>{" "}
        <br />
        <a href="https://github.com/Wishazm/WishBook" target="blank">
          GitHub repository of my project!
        </a>
        <br />
        <a href="https://x.com/azmizemoumnia" target="blank">
          My Twitter account
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default About;
