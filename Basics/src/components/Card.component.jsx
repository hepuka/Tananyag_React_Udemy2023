/*

A komponens children elemként kapja meg a props-okat.

Ebben az esetben a children elem egy másik komponens, vagy a user vagy az ital komponens

*/

import React from "react";

const Card = ({ children }) => {
  return <div className="card">{children}</div>;
};

export default Card;
