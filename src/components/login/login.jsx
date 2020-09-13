import React, { useContext, useState } from "react";
import { LoginVerify, MovieContext } from "../moviecontext/movieContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    LoginVerify(email, password);
  };
  const { isLoggedInStatus } = useContext(MovieContext);
  const [isLoggedIn] = isLoggedInStatus;

  return (
    <div className="container mt-5">
      {isLoggedIn ? (
        <h1>You are logged in</h1>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          ></input>
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
          ></input>
          <button type="submit" className="btn btn-outline-success mt-3">
            LOGIN
          </button>
        </form>
      )}
    </div>
  );
};

export default Login;
