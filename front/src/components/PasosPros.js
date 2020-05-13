import React from "react";

function PasosPros() {
  const ejecutarAPI = () => {
    // Oculta el botón enviar
    document.getElementById("botonEnviar").style.visibility = "hidden";
    document.getElementById("botonEnviar").style.position = "absolute";
    // Muestra el spinner
    document.getElementById("cargando").style.visibility = "visible";
    document.getElementById("cargando").style.position = "relative";
    const mitexto = document.getElementById("parrafo").value;
    const tbody = document.getElementById("recordsTableBody");
    const aEnviar = { texto: mitexto };
    fetch("/postRespuesta", {
      method: "POST",
      body: JSON.stringify(aEnviar),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((respuesta) => {
        if (respuesta) {
          console.log("Llegaron las palabras clave ", respuesta);
          respuesta.forEach((register) => {
            let tr = document.createElement("tr");
            // Iterates over record's values
            const td1 = document.createElement("td");
            td1.textContent = register["keyword"];
            tr.appendChild(td1);
            const td2 = document.createElement("td");
            const arreglo = register["relevance"].split("");
            td2.textContent = arreglo[2] + arreglo[3] + "." + arreglo[4] + "%";
            tr.appendChild(td2);
            const td3 = document.createElement("td");
            td3.textContent = register["count"];
            tr.appendChild(td3);
            tbody.appendChild(tr);
          });
          // Oculta el spinner
          document.getElementById("cargando").style.visibility = "hidden";
          document.getElementById("cargando").style.position = "absolute";
          // Muestra la tabla
          document.getElementById("records").style.visibility = "visible";
          document.getElementById("records").style.position = "relative";
        }
      });
  };

  return (
    <div className="container">
      <p className="descripcion">1. API de reconocimiento de texto.</p>

      <div className="form-group black-border">
        <label for="exampleFormControlTextarea4">
          Ingrese su abstract o cuéntenos sobre su invento:
        </label>
        <textarea
          className="form-control rounded-0"
          id="parrafo"
          rows="6"></textarea>

        <br />

        <div className="col text-center">
          <button
            type="button"
            className="btn btn-success"
            onClick={ejecutarAPI}
            style={{ visibility: "visible", position: "absolute" }}
            id="botonEnviar">
            Enviar
          </button>
          <br />
          <div
            className="spinner-border text-success"
            role="status"
            style={{ visibility: "hidden" }}
            id="cargando">
            <span className="sr-only">Cargando...</span>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="container">
        <table
          className="table table-bordered"
          id="records"
          style={{ visibility: "hidden" }}>
          <thead className="thead-success text-center" id="recordsTableHead">
            <tr>
              <th scope="col">Palabra(s)</th>
              <th scope="col">Importancia</th>
              <th scope="col">No. de apariciones</th>
            </tr>
          </thead>
          <tbody id="recordsTableBody"></tbody>
        </table>
      </div>

      <p className="descripcion">2. API de traducción de texto.</p>
      <p className="descripcion">2. API de patentes.</p>
    </div>
  );
}

export default PasosPros;
