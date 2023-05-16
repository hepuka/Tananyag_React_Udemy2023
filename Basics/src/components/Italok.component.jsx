/*

A button elemet egy másik komponens biztosítja. A button komponens children elemként kapja meg a props-ot, ami jelen esetben egy sima szöveg.

*/
import React from "react";
import Button from "./Button.component";

const Italok = ({ name, packaging, price }) => {
  return (
    <div>
      <div className="content">
        <h2>Name: {name}</h2>
        <h3>Packaging: {packaging}</h3>
        <h3>Price: {price}</h3>
        <Button data={{ name, packaging, price }}>Learn more</Button>
      </div>
    </div>
  );
};

export default Italok;
