import React, { useState } from "react";
import "./Conditional.css";

const Conditional = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const toggle = () => {
    /*toggle miatt kell !isLoggedIn, tagadom a gombnyomás előtti állapotot*/
    setIsLoggedIn(!isLoggedIn);
  };

  let message;

  if (isLoggedIn) {
    message = "Welcome, You are loged in!";
  } else {
    message = "Welcome, Guest";
  }

  return (
    <>
      {/* a class nevet módosítom az isLOggedIn state állapotától függően */}
      <div className="{isLoggedIn ? 'user' : 'guest'} --center-all --p2">
        <h1>{message}</h1>

        {/* attól függően, hogy mi a state állapota, true v false */}
        <h1>{isLoggedIn ? "Login" : "logout"}</h1>
      </div>

      <div className="--center-all">
        <button className="--btn --btn-primary" onClick={toggle}>
          {/* ha a state-ben az isLoggedIn true akkor a gomb megnyomása után Logout-ot fog megjelenni */}
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
    </>
  );
};

export default Conditional;
