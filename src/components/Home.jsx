import React from "react";
// @ts-ignore
import home from "./home.module.css";
import Login from "../login/Login";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Footer from "../footer/Footer";
import ProductList from "./ProductList";
import { useEffect } from "react";
import { useState } from "react";

function Home() {
  const [products, setProducts] = useState([]);

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

  const handleProductLoad = (product) => {
    console.log("Product loaded:", product);
  };
  return (
    <>
      <div className={home.home}>
        <div className={home.container}>
          <h1> Discover Your Next Great Read: Download Books Instantly📖</h1>
          <p>
            Are you always on the lookout for your next captivating book? With
            our extensive collection of digital books, you can explore a wide
            range of genres and authors at your convenience. Simply download
            your chosen books and dive into new worlds, gripping narratives, and
            enlightening non-fiction—all from the comfort of your own device.
            Whether you're on the go or relaxing at home, our easy-to-use
            platform ensures that your next great read is just a click away.
            Start downloading today and embark on your literary journey!
          </p>
          <Link to="/login" className={home.getStarted}>
            Get Started{" "}
          </Link>
        </div>
        <div className={home.pic}>
          <img src="/Circuit-PNG-Photos.png" alt="" />
        </div>
      </div>

      <div className={home.service}>
        <h1>WishBook, At you service !</h1>
        <div className={home.divs}>
          <div>
            <img src="/global-distribution (2).png" alt="" />
            <h3>Free download</h3>
            <p>
              Download books for free and start enjoying your next read
              immediately, without any hassle.
            </p>
          </div>
          <div>
            <img src="/verified (2).png" alt="" />
            <h3>Secure Downloads</h3>
            <p>
              Rest assured that your book downloads are secure and protected,
              ensuring a safe experience.
            </p>
          </div>
          <div>
            <img src="/humanitarian (3).png" alt="" />
            <h3>Love to help you</h3>
            <p>
              Our dedicated team is here to assist you every step of the way.
            </p>
          </div>
        </div>
      </div>

      <div className={home.randomDiv}>
        <div>
          <h1>We provide you with super quality E-books</h1>
          <p>
            At WishBook, we are committed to delivering high-quality e-books
            that meet your reading needs. Our extensive collection features
            carefully curated selections from a range of genres and authors,
            ensuring that you receive only the best in digital reading. Each
            e-book is optimized for a seamless reading experience, so you can
            enjoy your favorite titles with crisp text and clear formatting.
            Dive into our premium e-book library and experience top-notch
            quality in every download.
          </p>
          <button>View</button>
        </div>
        <div>
          <img src="/photo.jpg" alt="" />
        </div>
      </div>
      <div>
        <h1 className={home.prodcts}>Some of Our Products</h1>
        <ProductList
          products={products}
          onLoad={handleProductLoad}
          displayCount={4}
        />
      </div>

      <div className={home.box}>
        <div className={home.who}>
          <span>WishBook</span>
          <h1>Who are we?</h1>
          <p>
            At WishBook, we're passionate about making literature accessible to
            everyone. We provide a comprehensive platform where book lovers can
            easily download and enjoy a diverse selection of books. Our mission
            is to connect readers with their next great read by offering a
            seamless and user-friendly experience. Whether you're searching for
            timeless classics, contemporary bestsellers, or niche genres, our
            extensive digital library ensures that you have access to a world of
            knowledge and entertainment at your fingertips. Join us in
            celebrating the joy of reading and discover the perfect book for
            every moment.
          </p>
          <a href="./about">More about Us !</a>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
