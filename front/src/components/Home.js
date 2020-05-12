import React from "react";
import { Link } from "react-router-dom";
import ojalaquede from "../ojalaquede.PNG";
import logoCompleto from "../LogoCompleto.png";
import mujer from "../mujer.PNG";

function Home() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-2">
            <img src={logoCompleto} width="100%"></img>
          </div>
          <div className="col">
            <div className="row">
              <h1 style={{ fontSize: "80px" }}>
                <strong>Legal Watch</strong>
              </h1>
            </div>
            <div className="row">
              <p style={{ fontSize: "30px" }}>
                Patentar nunca había sido tan fácil
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />

      <div class="caja">
        <div class="row">
          <div class="col">
            <p class="titulo">¡Bienvenido!</p>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <p class="subtitulo">
              Antes de comenzar conoce los tipos de patentes que existen, el
              proceso es el mismo para ambos. Sin embargo, es importante escoger
              el tipo de patente que se adapte mejor a tu idea y seleccionarlo
              al momento de llenar el formulario.
            </p>
            <br />
          </div>
        </div>
        <hr />

        <div class="row">
          <div class="col-5">
            <br />
            <br />
            <br />
            <br />
            <br />
            <img
              src={ojalaquede}
              class="img-responsive"
              alt="Responsive"
              width="400"
              height="300"
            />
            <br />
            <br />
          </div>
          <div class="col subtitulo2">
            <p class="titulo">Patente de modelo de utilidad</p>
            <p>
              Los modelos de utilidad se consideran particularmente adaptados
              para las PYME que efectúan mejoras "menores" en productos
              existentes o adapten dichos productos. Los modelos de utilidad se
              utilizan principalmente para las innovaciones mecánicas.
            </p>
            <p>
              El modelo de utilidad sólo contempla la protección de invenciones
              de producto; en cambio en la patente de invención se protegen
              invenciones de producto y, también, de procedimiento. La invención
              protegida en el modelo de utilidad debe ser nueva y tener
              aplicación industrial. El período de protección del modelo de
              utilidad es de 10 años.
            </p>
            <p>Requiere:</p>
            <ul>
              <li>Novedad:</li>
              <p>
                que una invención es nueva cuando no está comprendida en el
                estado de la técnica.
              </p>
              <li>Aplicación industrial:</li>
              <p>
                Significa que la invención puede ser fabricada o utilizada en
                cualquier tipo de industria.
              </p>
            </ul>
            <br />
            <br />
          </div>
        </div>
        <hr />
        <div class="row">
          <div class="col-5">
            <br />
            <br />
            <br />
            <br />
            <br />
            <img
              src={mujer}
              class="img-responsive"
              alt="Responsive"
              width="400"
              height="300"
            />
            <br />
            <br />
          </div>
          <div class="col subtitulo2">
            <p class="titulo">Patente de invención</p>
            <p>
              La Patente es un privilegio que le otorga el Estado al inventor
              como reconocimiento de la inversión y esfuerzos realizados por
              éste para lograr una solución técnica que le aporte beneficios a
              la humanidad. Dicho privilegio consiste en el derecho a explotar
              exclusivamente el invento por un tiempo determinado.
            </p>
            <p>
              {" "}
              durante 20 años puede explotar el invento. La explotación puede
              consistir en comercializar exclusiva y directamente el producto
              patentado, o por intermedio de terceros otorgando licencias, o
              transfiriendo los derechos obtenidos mediante su venta para que un
              tercero explote la invención. En conclusión, el beneficio es
              económico para el inventor o titular de la patente
            </p>
            <p>Requiere:</p>
            <ul>
              <li>Novedad:</li>
              <p>
                que una invención es nueva cuando no está comprendida en el
                estado de la técnica.
              </p>
              <li>Nivel inventivo:</li>
              <p>
                Significa que la invención no debe deducirse del estado de la
                técnica de forma obvia o evidente para un experto en la materia.
              </p>
              <li>Aplicación industrial:</li>
              <p>
                Significa que la invención puede ser fabricada o utilizada en
                cualquier tipo de industria.
              </p>
            </ul>
            <br />
            <br />
          </div>
        </div>

        <div class="row">
          <div class="col boton">
            <Link to={"/paso1"}>
              <button className="btn btn-primary">Comenzar</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
