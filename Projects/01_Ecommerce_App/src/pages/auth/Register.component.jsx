/*
1.
- useState-ek az input mezőkre
- input mezők attrribútumainak megadni a value-t és az onchange-et
- button gombnak megadni a type="submit"-ot
- form mezőre meghívni onSubmit-ot, megadni neki a függvényt amit végrehajt
- komponens return utasítása előtt elkészíteni a registerUser függvényt

2.
registerUser függvény
- npm i react-toastify
- https://firebase.google.com/docs/auth/web/password-auth
- const navigate = useNavigate(); a metódus végére kell, hogy melyik oldalra navigáljon ha befejeződött a metódus. pl. a regisztráció befejezésekor a navigate("login")-ra

*/

import React, { useState } from "react";
import styles from "./auth.module.scss";
import registerImg from "../../assets/register.png";

//Firebase Import

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import { toast } from "react-toastify";
//compomemts
import Card from "../../components/card/Card.component";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../components/loader/Loader.component";

const Register = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const registerUser = (e) => {
    e.preventDefault();

    if (passwordInput !== passwordConfirm) {
      toast.error("Password do not match!");
    }
    setIsLoading(true);

    createUserWithEmailAndPassword(auth, emailInput, passwordInput)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setIsLoading(false);
        toast.success("Registration Successful...");
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error.message);
        setIsLoading(false);
      });
  };

  return (
    <>
      {isLoading && <Loader />}
      <section className={`container ${styles.auth}`}>
        <Card>
          <div className={styles.form}>
            <h2>Register</h2>
            <form onSubmit={registerUser}>
              <input
                type="text"
                placeholder="Email"
                required
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                required
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                required
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
              />
              <button type="submit" className="--btn --btn-primary --btn-block">
                Register
              </button>
            </form>
            <span className={styles.register}>
              <p>Already have an account? Please,</p>
              <Link to="/login">Login</Link>
            </span>
          </div>
        </Card>
        <div className={styles.img}>
          <img src={registerImg} alt="register" width={400} />
        </div>
      </section>
    </>
  );
};

export default Register;
