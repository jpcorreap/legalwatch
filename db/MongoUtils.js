const MongoClient = require("mongodb").MongoClient;
const ObjectID = require("mongodb").ObjectID;
require("dotenv").config();

const url = "localhost:27017";

function MongoUtils() {
  const mu = {};

  // Connection to database
  mu.connect = () => {
    const client = new MongoClient(url, {
      useUnifiedTopology: true,
    });
    return client.connect();
  };

  // ----------------------
  // Users operations
  // ----------------------
  mu.users = {};

  //creates a new user of the application
  mu.users.create = (username, password, premium) =>
    mu.connect().then((client) => {
      console.log(
        "Se conectó a la base de datos y va a guardar ",
        username,
        ":",
        password
      );
      const usuarios = client.db("legalWatch").collection("usuarios");

      return usuarios
        .insertOne({ correo: username, password: password, premium: premium })
        .finally(() => client.close());
    });

  // Get a specific user by username
  mu.users.findByUsername = (user, cb) =>
    mu.connect().then((client) => {
      const usuarios = client.db("legalWatch").collection("usuarios");

      return usuarios
        .findOne({ correo: user })
        .finally(() => client.close())
        .then((user) => {
          cb(null, user);
        });
    });

  // Get a specific user by id
  mu.users.findOneById = (id, cb) =>
    mu.connect().then((client) => {
      const usuarios = client.db("legalWatch").collection("usuarios");

      // when searching by id we need to create an ObjectID
      return usuarios
        .findOne({ _id: new ObjectID(id) })
        .finally(() => client.close())
        .then((user) => {
          cb(null, user);
        });
    });

  mu.listenForChanges = (notifyAll) => {
    console.log("Listening for changes");
    return mu.connect().then((client) => {
      const cursor = client.db("legalWatch").collection("solicitudes").watch();

      cursor.on("change", (data) => {
        console.log("Mongo change", data);
        mu.getSolicitudes().then((docs) => {
          notifyAll(JSON.stringify(docs));
        });
      });
    });
  };

  return mu;
}

module.exports = MongoUtils();
