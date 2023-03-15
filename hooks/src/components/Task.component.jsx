import React from "react";
import "./Task.css";

const Task = ({ name, isCompleted }) => {
  if (isCompleted) {
    return <li className="complete">{`${name} ✔`}</li>;
  }

  return (
    <div>
      <li>{name}</li>
    </div>
  );
};

export default Task;
