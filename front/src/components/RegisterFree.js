import React from "react";
import pago2 from "../pago2.PNG";
import Header from "./Header.js";

const RegisterFree = () => {
  return (
    <div className="Register">
      <Header />
      <div className="container">
        <br />
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div>
                <h2>
                  <strongCriollo>Registro free </strongCriollo>
                </h2>
              </div>
              <br />
              <form action="/registerfree" method="POST">
                <div className="form-group">
                  <label for="exampleInputEmail1">Correo electrónico:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="name"
                    name="name"
                    required
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    No compartiremos tu correo con nadie más.
                  </small>
                </div>

                <div className="form-group">
                  <label for="exampleInputPassword1">Contraseña:</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                  />
                </div>

                <div className="form-group">
                  <label for="exampleInputPassword1">Repetir contraseña:</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password2"
                  />
                </div>
                <div className="form-check text-right">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                    name="autoriza"
                  />
                  <label
                    className="form-check-label text-muted"
                    for="exampleCheck1">
                    Autorizo recibir promociones
                  </label>
                  <br />
                  <button
                    className="btn btn-success"
                    style={{ marginTop: "20px" }}>
                    Crear cuenta
                  </button>
                </div>
              </form>
            </div>
            <div className="col-1"></div>
            <div className="col">
              <img
                src={pago2}
                className="img-responsive"
                alt=" "
                width="100%"></img>
            </div>
          </div>
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default RegisterFree;
