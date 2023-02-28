import React from "react";
import "./Task.css";

const Task = ({ name, isCompleted }) => {
  if (isCompleted) {
    return (
      <del>
        {" "}
        <li className="complete">{name} ✔</li>
      </del>
    );
  }

  return (
    <div>
      <li>{name}</li>
    </div>
  );
};

export default Task;
