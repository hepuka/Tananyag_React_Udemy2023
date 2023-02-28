import "./App.css";
import Users from "./components/Users.component";
import Card from "./components/Card.component";
import { users, italok, kavek } from "../src/data.js";
import Italok from "./components/Italok.component";

function App() {
  function getData(db, Component, packaging, price) {
    return db.map((item) => {
      return (
        <Card key={item.id}>
          <Component
            name={item.name}
            age={item.age}
            packaging={item.packaging}
            price={item.price}
          />
        </Card>
      );
    });
  }

  return (
    <div>
      <h1>List of Users</h1>
      {getData(users, Users)}

      <h1>List of Drinks</h1>
      {getData(italok, Italok)}

      <h1>List of Coffees</h1>
      {getData(kavek, Italok)}
    </div>
  );
}

export default App;
