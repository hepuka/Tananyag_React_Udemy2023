import React, { useState } from "react";

const Conditional = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const toggleLogin = () => {
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
      <div className="--center-all --p2 ">
        <h1>{message}</h1>
        <h1>{isLoggedIn ? "Login" : "logout"}</h1>
      </div>

      <div className="--center-all">
        <button className="--btn --btn-primary" onClick={toggleLogin}>
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
    </>
  );
};

export default Conditional;
