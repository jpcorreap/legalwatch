import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Home from "./Home.js";
import Login from "./Login.js";
import Register from "./Register.js";
import ProgressBar from "./ProgressBar.js";
import Header from "./Header.js";
import Paso1 from "./Paso1.js";
import Paso2 from "./Paso2.js";
import Paso3 from "./Paso3.js";
import Paso3_PatentScope from "./Paso3_PatentScope.js";
import Paso3_GoogleUPatents from "./Paso3_GoogleUPatents.js";
import Paso3_GoogleIPatents from "./Paso3_GoogleIPatents.js";
import Paso3_NasaPatents from "./Paso3_NasaPatents.js";
import Paso4 from "./Paso4.js";
import Paso5 from "./Paso5.js";
import Paso6 from "./Paso6.js";
import Solicitudes from "./Solicitudes.js";
import quiobo from "../quiobo.png";
import banner5 from "../banner5.PNG";
import banner6 from "../banner6.PNG";
import banner7 from "../banner7.PNG";

function Pasos(props) {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Header />
          <div>
            <br />
            <br />
            <div className="container">
              <div className="row">
                <div className="col-8">
                  <p className="letraPeque text-justify">
                    Bienvenido a Legal Watch, somos un sitio web con el
                    propósito de orientarte y ayudarte en el proceso para
                    obtener una patente en Colombia. De una manera fácil de usar
                    te brindamos la información que necesitas en un solo lugar y
                    te acompañamos en cada uno de los pasos para ver tu idea
                    patentada.
                  </p>
                </div>
                <div className="col-4">
                  <img src={quiobo} width="100%" alt=" " />
                </div>
                <div className="col-12">
                  <Link to={"/antesdecomenzar"}>
                    <button
                      className="btn btn-success"
                      style={{ fontSize: "25px" }}>
                      Comenzar
                    </button>
                  </Link>

                  <div className="row" style={{ marginTop: "100px" }}>
                    <div className="col-md-4">
                      <div className="card h-700">
                        <img
                          className="card-img-top"
                          src={banner7}
                          alt=" "
                          width="100%"
                        />
                        <div className="card-body text-center">
                          <h5 className="card-title">
                            Cifras de patentes en Colombia
                          </h5>
                          <a
                            href="#"
                            routerLink="/acerca"
                            className="btn btn-success">
                            <strong>¡Descubre más!</strong>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="card h-700">
                        <img
                          className="card-img-top"
                          src={banner6}
                          alt=" "
                          width="100%"
                        />
                        <div className="card-body text-center">
                          <h5 className="card-title">
                            ¿Cómo podemos ayudarte?
                          </h5>
                          <a
                            href="#"
                            routerLink="/comenzar"
                            className="btn btn-success">
                            <strong>¡Descubre más!</strong>
                          </a>
                        </div>
                      </div>
                    </div>
                    <br />
                    <br />
                    <div className="col-md-4">
                      <div className="card h-700">
                        <img
                          className="card-img-top"
                          src={banner5}
                          alt=" "
                          width="100%"
                        />
                        <div className="card-body text-center">
                          <h5 className="card-title">Estado de tu patente</h5>
                          <a
                            href="#"
                            routerLink="/cinco"
                            className="btn btn-success text-center">
                            <strong>¡Descubre más!</strong>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
          </div>
        </Route>

        <Route exact path="/antesdecomenzar">
          <Home />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/register">
          <Register />
        </Route>

        <Route exact path="/solicitudes">
          <Solicitudes />
        </Route>

        <Route exact path="/paso1">
          <ProgressBar avance={1} />
          <Paso1 />
        </Route>

        <Route exact path="/paso2">
          <ProgressBar avance={2} />
          <Paso2 />
        </Route>

        <Route exact path="/paso3">
          <ProgressBar avance={3} />
          <Paso3 />
        </Route>

        <Route exact path="/paso3_scope">
          <ProgressBar avance={3} />
          <Paso3_PatentScope />
        </Route>

        <Route exact path="/paso3_googleutility">
          <ProgressBar avance={3} />
          <Paso3_GoogleUPatents />
        </Route>

        <Route exact path="/paso3_googleissued">
          <ProgressBar avance={3} />
          <Paso3_GoogleIPatents />
        </Route>

        <Route exact path="/paso3_nasa">
          <ProgressBar avance={3} />
          <Paso3_NasaPatents />
        </Route>

        <Route exact path="/paso4">
          <ProgressBar avance={4} />
          <Paso4 />
        </Route>

        <Route exact path="/paso5">
          <ProgressBar avance={5} />
          <Paso5 />
        </Route>

        <Route exact path="/paso6">
          <ProgressBar avance={6} />
          {props.username ? <Paso6 username={props.username} /> : <Paso6 />}
        </Route>
      </Switch>
    </div>
  );
}

export default Pasos;
