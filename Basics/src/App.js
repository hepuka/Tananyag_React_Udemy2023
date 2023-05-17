/*

A weboldal user és az italok,kávék részét egy függvény rendereli ki. A függvénymegkapja za adatbázist, a komponens nevét és további property-t az adatbázisból.

Majd a függvény visszaadja a tömb bejárásakor a Card komponens ami childrenként megkapja vagy a user vagy ital komponenst.

A return résznél már nem a komponenseket adom meg, hanem csak függvényhívást.
*/

import Users from "./components/Users.component";
import { users, italok, kavek } from "../src/data.js";
import Italok from "./components/Italok.component";
import { getData } from "./getData";
import { useState } from "react";

function App() {
  const [isBlured, setIsBlured] = useState(false);

  return (
    <div className={isBlured ? "is-blurred" : "wrap"}>
      <h1>List of Users</h1>

      <div className="container">{getData(users, Users)}</div>

      <h1>List of Drinks</h1>

      <div className="container">{getData(italok, Italok)}</div>

      <h1>List of Coffees</h1>

      <div className="container">{getData(kavek, Italok)}</div>
    </div>
  );
}

export default App;
