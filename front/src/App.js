import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar.js";
import Pasos from "./components/Pasos.js";
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
        <Navbar autenticado={true} username={user.username} />
      ) : (
        <Navbar autenticado={false} />
      )}
      <br />
      <br />

      {user ? (
        <Pasos autenticado={true} username={user.username} />
      ) : (
        <Pasos autenticado={false} />
      )}
    </div>
  );
}

export default App;
