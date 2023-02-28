import React, { useState } from "react";
import "../auth/AuthContainer.scss";

import Login from "./Login.component";
import Register from "./Register.component";
import Reset from "./Reset.component";

const AuthContainer = () => {
  const [auth, setAuth] = useState({
    login: true,
    register: false,
    reset: false,
  });
  /* const [login, setLogin] = useState(true);
  const [register, setRegister] = useState(false);
  const [reset, setReset] = useState(false);
 */

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePaswword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    setAuth({ login: true, register: false, reset: false });

    /*     setReset(false);
    setLogin(true);
    setRegister(false); */
  };

  const handleRegister = () => {
    setAuth({ login: false, register: true, reset: false });
    /* setLogin(false);
    setRegister(true);
    setReset(false); */
  };

  const handleReset = () => {
    setAuth({ login: false, register: false, reset: true });
    /* setLogin(false);
    setReset(true);
    setRegister(false); */
  };

  return (
    <>
      <section className="--flex-center --100vh">
        <div className="container box">
          {auth.login && (
            <Login
              onRegister={handleRegister}
              onReset={handleReset}
              onShowPassword={showPassword}
              onTogglePassword={handleTogglePaswword}
            />
          )}
          {auth.register && (
            <Register
              onLogin={handleLogin}
              onShowPassword={showPassword}
              onTogglePassword={handleTogglePaswword}
            />
          )}
          {auth.reset && <Reset onLogin={handleLogin} />}
        </div>
      </section>
    </>
  );
};

export default AuthContainer;
