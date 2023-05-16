/*

A button elemet egy másik komponens biztosítja. A button komponens children elemként kapja meg a props-ot, ami jelen esetben egy sima szöveg
*/

import React from "react";
import Button from "./Button.component";
import Modal from "./Modal";

const Users = ({ name, age }) => {
  return (
    <div>
      <div className="content">
        <h2>Name: {name}</h2>
        <h3>Age: {age}</h3>
        <Button data={{ name, age }}>Learn more</Button>
      </div>
    </div>
  );
};

export default Users;
