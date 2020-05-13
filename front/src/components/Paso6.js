import React from "react";
import PasoTitle from "./PasoTitle.js";
import business from "../business.png";

function Paso6() {
  /*const enviarSolicitud = () => {
    fetch(url, {
      method: "POST", // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));
  };*/

  return (
    <div className="paso">
      <PasoTitle actual={6} nombre="Rastrear el trámite" />
      <br />
      <div className="row">
        <div className="col-5 text-center">
          <img src={business} alt=" " width="40%"></img>
        </div>
        <div className="col">
          <p className="descripcion">
            El proceso de validación ante la SIC consta de 5 etapas, las cuales
            son:
          </p>
          <ol className="descripcion">
            <li>Examen de forma.</li>
            <li>Publicación y oposiciones.</li>
            <li>Petición del examen de patentabilidad.</li>
            <li>Examen de patentabilidad.</li>
            <li>Examen de fondo</li>
          </ol>
          <p className="descripcion">
            Haga{" "}
            <a href="https://sipi.sic.gov.co/sipi/Extra/Default.aspx">
              click aquí
            </a>{" "}
            para conocer en cuál etapa va su solicitud.
          </p>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default Paso6;
