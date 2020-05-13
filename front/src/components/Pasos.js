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
import mas from "../mas.PNG";
import solo from "../solo.PNG";

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
                  <Link to={"/elijaplan"}>
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

        <Route exact path="/elijaplan">
          <div className="container">
            <div className="caja text-center">
              <h2 className="text-success">
                <strong>Elige un plan</strong>
              </h2>

              <p className="tituloFo" style={{ fontSize: "20px" }}>
                Legal Watch tiene dos planes de servicios para ti:{" "}
                <strong>PREMIUM</strong> y <strong>FREE</strong>.
              </p>
            </div>
            <br />
            <br />
            <div className="caja2">
              <div className="row">
                <div className="col">
                  <img
                    src={mas}
                    className="img-responsive"
                    alt="Responsive"
                    width="100%"
                  />
                </div>
                <div className="col">
                  <p className="titulo">
                    <strong>PREMIUM</strong>
                  </p>
                  <br />
                  <div className="text-justify">
                    <p className="letra">
                      {" "}
                      Con el plan premium nosotros hacemos todo el proceso por
                      ti. El plan incluye:
                    </p>
                    <ul
                      className="letra"
                      style={{ fontSize: "20px !important" }}>
                      <li>Reuniones presenciales.</li>
                      <li>Grupo de expertos y abogados a tu disposición.</li>
                      <li>Realización de trámites y papeleo.</li>
                      <li>Seguimiento del proceso.</li>
                      <li>Búsqueda en bases de datos</li>
                      <li>
                        Recordatorio de pago sobre la tasa de anualidad cada
                        año.
                      </li>
                    </ul>
                  </div>
                  <Link to={"/premium"}>
                    <button
                      className="btn btn-success"
                      style={{ fontSize: "25px" }}>
                      Quiero Premium
                    </button>
                  </Link>
                </div>
              </div>
              <br />
              <br />
              <br />
              <div className="row">
                <div className="col">
                  <p className="titulo">FREE</p>
                  <p className="letra text-justify">
                    {" "}
                    Con el plan free puedes navegar, conocer y seguir cada uno
                    de los pasos necesarios para conseguir una patente. De
                    manera fácil e intuitiva te brindamos toda la información
                    necesaria para que tu idea se de a conocer.
                  </p>

                  <Link to={"/paso1"}>
                    <button
                      className="btn btn-success"
                      style={{ fontSize: "25px" }}>
                      Quiero Free
                    </button>
                  </Link>
                </div>
                <div className="col">
                  <img
                    src={solo}
                    className="img-responsive"
                    alt="Responsive"
                    width="400"
                    height="400"
                  />
                </div>
              </div>
            </div>
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
          <div className="container">
            <ProgressBar avance={1} />
            <Paso1 />
          </div>
        </Route>

        <Route exact path="/paso2">
          <div className="container">
            <ProgressBar avance={2} />
            <Paso2 />
          </div>
        </Route>

        <Route exact path="/paso3">
          <div className="container">
            <ProgressBar avance={3} />
            <Paso3 />
          </div>
        </Route>

        <Route exact path="/paso3_scope">
          <div className="container">
            <ProgressBar avance={3} />
            <Paso3_PatentScope />
          </div>
        </Route>

        <Route exact path="/paso3_googleutility">
          <div className="container">
            <ProgressBar avance={3} />
            <Paso3_GoogleUPatents />
          </div>
        </Route>

        <Route exact path="/paso3_googleissued">
          <div className="container">
            <ProgressBar avance={3} />
            <Paso3_GoogleIPatents />
          </div>
        </Route>

        <Route exact path="/paso3_nasa">
          <div className="container">
            <ProgressBar avance={3} />
            <Paso3_NasaPatents />
          </div>
        </Route>

        <Route exact path="/paso4">
          <div className="container">
            <ProgressBar avance={4} />
            <Paso4 />
          </div>
        </Route>

        <Route exact path="/paso5">
          <div className="container">
            <ProgressBar avance={5} />
            <Paso5 />
          </div>
        </Route>

        <Route exact path="/paso6">
          <div className="container">
            <ProgressBar avance={6} />
            {props.username ? <Paso6 username={props.username} /> : <Paso6 />}
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default Pasos;
