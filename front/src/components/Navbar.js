import React from "react";
import { Link } from "react-router-dom";
import logo from "../Logo.png";
import fashion from "../fashion.png";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand" id="navbar">
      <a className="navbar-brand" href="/">
        <img src={logo} alt="logo" width="40px" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent">
        {props.autenticado === false ? (
          <div>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to={"/login"} className="nav-link linkNavbar">
                    Ingresar
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/elijaplan"} className="nav-link linkNavbar">
                    Registrarse
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{ color: "white" }}>
                  <strong>{props.user.correo}</strong>
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a
                    className="dropdown-item"
                    onClick={() => {
                      fetch("/logoutback").then(
                        () => (window.location.pathname = "/")
                      );
                    }}>
                    Cerrar sesión
                  </a>
                </div>
              </li>
              {props.user.premium ? (
                <li className="nav-item dropdown">
                  <img src={fashion} alt=" " width="30px"></img>
                </li>
              ) : (
                <span></span>
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
