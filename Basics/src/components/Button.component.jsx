/*

A komponens children elemként kapja meg a props-okat.

Ebben az esetben a children elem egy sima szöveg

*/

import React from "react";

const Button = ({ children }) => {
  return (
    <div>
      <button className="btn">{children}</button>
    </div>
  );
};

export default Button;
