import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import frm from "./login.module.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "admin@gmail.com" && password === "admin") {
      navigate("/admin");
    } else {
      alert("Identifiants incorrects");
    }
  };

  return (
    <div className={frm.loginDiv}>
      <form className={frm.loginForm}>
        <h1>Login</h1>
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />{" "}
        <br />
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          value={password}
          placeholder="Password"
          required
        />
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>{" "}
        <br />
        <span>
          Don't have an account! &nbsp;
          <a className={frm.lnk} href="/signup">
            Create One Here
          </a>
        </span>
      </form>
    </div>
  );
}

export default Login;
