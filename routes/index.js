const express = require("express");
const router = express.Router();
const db = require("../db/MongoUtils.js");
const blockspring = require("blockspring");
require("dotenv").config();

router.get("/", function (req, res) {
  res.render("home", { user: req.user });
});

// Data endpoints
router.get("/solicitudes", (req, res) => {
  db.getSolicitudes().then((docs) => {
    res.json({ succes: true, docs });
  });
});

router.post("/ingresarSolicitud/:username", (req, res) => {
  db.createSolicitud(req.params.username, req.body).then(
    res.json({ status: "OK" })
  );
});

router.get("/getPatentscope", function (req, res) {
  db.patents.getPatentScope().then((col) => {
    res.json(col);
  });
});

router.get("/getGoogleUtilityPatents", function (req, res) {
  db.patents.getGoogleUtilityPatents().then((col) => {
    res.json(col);
  });
});

router.get("/getGoogleIssuedPatents", function (req, res) {
  db.patents.getGoogleIssuedPatents().then((col) => {
    res.json(col);
  });
});

router.get("/getNasaPatents", function (req, res) {
  db.patents.getNasaPatents().then((col) => {
    res.json(col);
  });
});

router.post("/postRespuesta", (req, res) => {
  console.log("LLEGÓ AL POST RESPUESTA CON EL BODDY ", req.body.texto);

  blockspring.runParsed(
    "spanish-keyword-extractor-monkeylearn",
    { text: req.body.texto },
    { api_key: "" },
    function (resAPI) {
      console.log("VA A ENVIAR LA RESPUESTA ", resAPI);
      res.json(resAPI.params.keywords);
    }
  );
});

module.exports = router;
