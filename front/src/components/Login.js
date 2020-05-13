import React from "react";

const Login = () => {
  return (
    <div className="Login">
      <div className="container" id="menuLogin">
        <h2>
          <strongCriollo>Ingreso de usuarios</strongCriollo>
        </h2>
        <br />
        <br />
        <div className="container">
          <form action="/login" method="post">
            <div className="form-group">
              <div className="row">
                <label>Correo electrónico:</label>
                <input type="email" className="form-control" name="username" />
              </div>
            </div>
            <div className="form-group">
              <div className="row">
                <label>Contraseña:</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                />
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-success">
                Ingresar
              </button>
            </div>
          </form>
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Login;
