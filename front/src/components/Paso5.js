import React from "react";
import PasoTitle from "./PasoTitle.js";
import pantallazoSIC from "../PantallazoSIC1.png";

function Paso5() {
  return (
    <div className="paso">
      <PasoTitle actual={5} nombre="Presenta tu idea" />
      <br />
      <p>
        Envía la solicitud a la Superintendencia de Industria y Comercio de
        manera virtual a través de su{" "}
        <a href="https://sipi.sic.gov.co/sipi/Extra/Default.aspx">
          Sistema de Propiedad Industrial (SIPI)
        </a>
        .{" "}
      </p>
      <div className="img-container text-center">
        <img src={pantallazoSIC} width="60%"></img>
      </div>
      <br />
    </div>
  );
}

export default Paso5;
