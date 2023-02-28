import React from "react";
import Button from "./Button.component";

const Italok = ({ name, packaging, price }) => {
  return (
    <div>
      <div>
        <h2>Name: {name}</h2>
        <h3>Packaging: {packaging}</h3>
        <h3>Price: {price}</h3>
        <Button>Learn more</Button>
      </div>
    </div>
  );
};

export default Italok;
