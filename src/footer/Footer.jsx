import React from "react";
// @ts-ignore
import foot from "./footer.module.css";

function Footer() {
  return (
    <div className={foot.foot}>
      <div className={foot.footer}>
        <div className={foot.two}>
          <div>
            <h1 className={foot.footerH1}>
              Get updates on fun stuff you probably want to know about in your
              inbox.🎧
            </h1>
            <input
              className={foot.email}
              type="email"
              name="email"
              id=""
              placeholder="Email Address"
            />
          </div>
          <div>
            <h3>Useful Links</h3>
            <p>
              <a className={foot.links} href="home.html">
                Home
              </a>
            </p>
            <p>
              <a className={foot.links} href="about.html">
                About Us
              </a>
            </p>
            <p>
              <a className={foot.links} href="gallery.html">
                Gallery
              </a>
            </p>
            <p>
              <a className={foot.links} href="contact.html">
                Contact
              </a>
            </p>
          </div>
          <div className={foot.media}>
            <h3>Follow Us</h3>
            <div className={foot.icons}>
              <img src="/twitter.png" alt="" />
              <a className={foot.links} href="about.html">
                Twitter
              </a>
            </div>

            <div className={foot.icons}>
              <img src="/instagram-logo.png" alt="" />
              <a className={foot.links} href="about.html">
                Instagram
              </a>
            </div>
            <div className={foot.icons}>
              <img src="/facebook-logo.png" alt="" />
              <a className={foot.links} href="about.html">
                Facebook
              </a>
            </div>
          </div>
          <div className={foot.address}>
            <h3>Address</h3>
            <div className={foot.icons}>
              <img src="/maps-and-flags.png" alt="" />

              <a className={foot.links} href="#">
                23 Main Street,Anytown,USA.
              </a>
            </div>
            <div className={foot.icons}>
              <img src="/phone.png" alt="" />
              <a className={foot.links} href="#">
                +212**********
              </a>
            </div>
            <div className={foot.icons}>
              <img src="/email.png" alt="" />
              <a className={foot.links} href="#">
                WishBook@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className={foot.producing}>
          <span>
            <img src="/copyright.png" alt="" />
            <p>2024 WishBook | All Rights Reserved</p>
          </span>
        </div>
      </div>
    </div>
  );
}
export default Footer;
