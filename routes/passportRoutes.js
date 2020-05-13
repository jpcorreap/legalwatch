const express = require("express");
const router = express.Router();
const passport = require("passport");
const bd = require("../db/MongoUtils.js");

router.get("/login", function (req, res) {
  res.render("login");
});

router.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/" }),
  function (req, res) {
    res.redirect("/");
  }
);

router.post("/login", (req, res) => {
  console.log(req.body);
  bd.users.findByUsername(req.body.username).then((user) => {
    try {
      console.log("se trajo al usuario", user);
      if (req.body.password == user.password) {
        passport.authenticate("local", { failureRedirect: "/" }),
          function (req, res) {
            res.redirect("/");
          };
      }
    } catch (e) {
      res.status(500).send();
    }
  });
});

router.get("/logoutback", function (req, res) {
  req.logout();
  res.redirect("/");
});

router.get(
  "/profile",
  require("connect-ensure-login").ensureLoggedIn(),
  function (req, res) {
    res.render("profile", { user: req.user });
  }
);

router.get("/getUser", (req, res) => {
  return res.json(req.user || null);
});

router.post("/registerfree", (req, res) => {
  try {
    console.log("Llegó a register free: ", req.body);
    bd.users.findByUsername(req.body.name, (nada, user) => {
      if (user == null) {
        bd.users
          .create(req.body.name, req.body.password, false)
          .then(res.redirect("/"));
      } else {
        console.log(req.body.name, "El usuario ya existe");
        res.redirect("/");
      }
    });
  } catch (e) {
    res.status(500).send(e);
  }
});

router.post("/registerpremium", (req, res) => {
  try {
    console.log("Llegó a register premium: ", req.body);
    bd.users.findByUsername(req.body.name, (nada, user) => {
      if (user == null) {
        bd.users
          .create(req.body.name, req.body.password, true)
          .then(res.redirect("/"));
      } else {
        console.log(req.body.name, "El usuario ya existe");
        res.redirect("/");
      }
    });
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
