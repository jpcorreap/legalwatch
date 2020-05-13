import React from "react";
import logoCompleto from "../LogoCompleto.png";

function Header() {
  return (
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
  );
}

export default Header;
