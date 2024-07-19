import React from "react";
// @ts-ignore
import frm from "./login.module.css";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

function Signup() {
  return (
    <div className={frm.loginDiv}>
      <form className={frm.loginForm}>
        <h1>Signup</h1>
        <input
          type="text"
          name="fullname"
          id="fullname"
          placeholder="Fullname"
        />{" "}
        <br />
        <input type="email" name="email" id="email" placeholder="Email" />
        <input type="phone" id="phone" name="phone" placeholder="Phone" />
        <br />
        <button>Login</button> <br />
        <span>
          Already have an account! &nbsp;
          <a className={frm.lnk} href="/Login">
            Login Here
          </a>
        </span>
      </form>
    </div>
  );
}
export default Signup;
