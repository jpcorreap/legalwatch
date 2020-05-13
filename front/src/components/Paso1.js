import React from "react";
import PasoTitle from "./PasoTitle.js";
import imagen from "../brainstorming-concept.jpg";
import mujer from "../mujer.PNG";

function Paso1() {
  return (
    <div className="paso">
      <PasoTitle actual={1} nombre="Elegir tipo de patente" />
      <br />
      <div className="row text-justify descripcion">
        <p>
          El primer paso para solicitar una patente es identificar cuál es el
          tipo más adecuado que se necesita. Muchos colombianos desconocen que
          existen dos tipos y las diferencias entre sí. De conocerse esto, se
          podrían realizar más patentes con mayor facilidad y se facilitarían
          los procesos de la SIC y de los abogados. Lea con atención y decida
          cuál opción se adapta mejor a sus necesidades:
        </p>
      </div>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-6 text-center">
            <h3>Patente de modelo de utilidad</h3>
            <br />
            <div className="text-justify descripcion">
              <p>
                Los <strongCriollo>modelos de utilidad</strongCriollo> se
                consideran particularmente adaptados para las{" "}
                <strongCriollo>PyMEs</strongCriollo> que efectúan mejoras
                menores en productos existentes o adaptan dichos productos. Los
                modelos de utilidad se utilizan principalmente para las{" "}
                <strongCriollo>innovaciones mecánicas</strongCriollo>.
              </p>
              <div className="row">
                <div className="col">
                  <div className="row img-container text-center">
                    <img src={imagen} alt=" " width="100%" />
                  </div>
                </div>
                <div className="col-7 descripcion">
                  <p>
                    El modelo de utilidad sólo contempla la protección de
                    <strongCriollo> invenciones de producto</strongCriollo>,
                    mientras que con la patente de invención se protegen
                    invenciones de producto y de procedimiento. La invención
                    protegida en el modelo de utilidad debe{" "}
                    <strongCriollo>ser nueva</strongCriollo> y{" "}
                    <strongCriollo>tener aplicación industrial</strongCriollo>.
                    El período de protección del modelo de utilidad es de{" "}
                    <strongCriollo>10 años</strongCriollo>.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 text-center">
            <h3>Patente de invención</h3>
            <br />
            <div className="text-justify descripcion">
              <p>
                Esta patente es un privilegio que le otorga el Estado al
                inventor como{" "}
                <strongCriollo>
                  reconocimiento de la inversión y esfuerzos{" "}
                </strongCriollo>
                realizados por éste para lograr una solución técnica que le
                <strongCriollo> aporte beneficios a la humanidad</strongCriollo>
                . Dicho privilegio consiste en el derecho a explotar
                exclusivamente el invento por un tiempo determinado{" "}
                <strongCriollo>no superior a 20 años</strongCriollo>.
              </p>
              <div className="row">
                <div className="col-7">
                  <p className="descripcion">
                    La explotación puede consistir en comercializar exclusiva y
                    directamente el producto patentado, o por intermedio de
                    terceros otorgando licencias, o transfiriendo los derechos
                    obtenidos mediante su venta para que un tercero explote la
                    invención. En conclusión, el{" "}
                    <strongCriollo>beneficio es económico</strongCriollo> para
                    el inventor o titular de la patente
                  </p>
                </div>
                <div className="col">
                  <div className="row img-container text-center">
                    <img src={mujer} alt=" " width="100%" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Paso1;
