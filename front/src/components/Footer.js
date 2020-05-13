import React from "react";
import logoBlanco from "../Logo.png";
import iconoMail from "../IconoMail.png";

function Footer() {
  return (
    <footer className="py-5 bg-dark">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <div className="row" style={{ marginLeft: "20px" }}>
              <div className="col-2 text-center">
                <img src={logoBlanco} width="72px" height="60px" alt=" "></img>{" "}
              </div>
              <div className="col">
                <div className="row">
                  <h5 className="text-white">
                    {" "}
                    <strong> Legal Watch</strong>
                  </h5>
                </div>
                <div className="row">
                  <p className="text-white">
                    Patentar nunca había sido tan fácil
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-1 mb-md-0 mb-3">
            <h5 className="text-uppercase">&nbsp;</h5>
          </div>

          <div className="col-md-3 mb-md-0 mb-3" id="contactenosFooter">
            <div className="row">
              <div className="col-6"></div>
              <div className="row">
                <div className="col">
                  <h5 className="text-white" style={{ marginRight: "15px" }}>
                    {" "}
                    <strong>Contáctenos:</strong>
                  </h5>
                </div>
                <div className="row">
                  <div className="img-container" id="contenedorCorreo">
                    <a href="mailto:legalwatchgolombia@gmail.com">
                      <img src={iconoMail} alt=" " width="30px" height="30px" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <p className="m-0 text-center text-white">
          <a
            onClick={() =>
              alert(
                "Código original tomado de https://github.com/jpcorreap/patentCol y posteriormente modificado."
              )
            }>
            Créditos sitio web
          </a>
        </p>
        <p className="m-0 text-center text-white">
          Copyright &copy; Legal Watch 2020
        </p>
      </div>
    </footer>
  );
}

export default Footer;
