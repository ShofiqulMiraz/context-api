import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LogOutFunction, MovieContext } from "../moviecontext/movieContext";

const Nav = () => {
  const { isLoggedInStatus } = useContext(MovieContext);
  const [isLoggedIn] = isLoggedInStatus;
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand">
            SHOFIQUL
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/dashboard" className="nav-link">
                  DASHBOARD
                </Link>
              </li>
              {isLoggedIn ? (
                <li className="nav-item">
                  <button onClick={LogOutFunction} className="btn nav-link">
                    {" "}
                    LOGOUT
                  </button>
                </li>
              ) : (
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    LOGIN
                  </Link>
                </li>
              )}
              <li className="nav-item">
                <Link to="/movies" className="nav-link">
                  MOVIES
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
