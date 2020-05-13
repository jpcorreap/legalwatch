import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar.js";
import Pasos from "./components/Pasos.js";
import Header from "./components/Header.js";
import quiobo from "./quiobo.png";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/getUser")
      .then((res) => res.json())
      .then((user) => {
        if (user) {
          setUser(user);
        }
      });
  }, []);

  return (
    <div classNameName="App">
      {user ? (
        <Navbar autenticado={true} username={user.username} />
      ) : (
        <Navbar autenticado={false} />
      )}
      <br />
      <br />

      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-8">
          <hr />
            <p className="letraPeque">
              {" "}
              Bienvenido a My legal watch, somos un sitio web con el propósito
              de orientarte y ayudarte en el proceso para obtener una patente en
              Colombia. De una manera fácil de usar te brindamos la información
              que necesitas en un solo lugar y te acompañamos en cada uno de los
              pasos para ver tu idea patentada.
            </p>
            <a
              className="btn btn-primary btn-lg"
              href="#"
              routerLink="/comenzar">
              Comenzar &raquo;
            </a>
          </div>
          <div className="col-md-4">
            <img src={quiobo} width="100%" />
          </div>
        </div>
      </div>

      {user ? (
        <Pasos autenticado={true} username={user.username} />
      ) : (
        <Pasos autenticado={false} />
      )}
    </div>
  );
}

export default App;
