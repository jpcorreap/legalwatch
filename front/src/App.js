import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar.js";
import Pasos from "./components/Pasos.js";
import Footer from "./components/Footer.js";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/getUser")
      .then((res) => res.json())
      .then((user) => {
        if (user) {
          setUser(user);
        }
      });
  }, []);

  return (
    <div classNameName="App">
      {user ? (
        <div>
          <Navbar autenticado={true} user={user} />
          <br />
          <br />
          <br />
          <br />
        </div>
      ) : (
        <div>
          <Navbar autenticado={false} />
          <br />
          <br />
          <br />
          <br />
        </div>
      )}

      {user ? (
        <Pasos autenticado={true} user={user} />
      ) : (
        <Pasos autenticado={false} />
      )}

      <Footer />
    </div>
  );
}

export default App;
