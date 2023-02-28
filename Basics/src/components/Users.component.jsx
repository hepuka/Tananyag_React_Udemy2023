import React from "react";
import Button from "./Button.component";

const Users = ({ name, age }) => {
  return (
    <div>
      <div>
        <h2>Name: {name}</h2>
        <h3>Age: {age}</h3>
        <Button>Learn more</Button>
      </div>
    </div>
  );
};

Users.defaultProps = {
  name: "Default name",
  age: "Default age",
};

export default Users;
