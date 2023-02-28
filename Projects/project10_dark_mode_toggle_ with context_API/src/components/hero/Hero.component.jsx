import React, { useContext } from "react";
import ThemeContext from "../../themeContext.js";
import "./Hero.css";
import heroImage from "../../assets/phone.svg";

const Hero = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section className="hero" data-theme={theme}>
      <div className="container --grid-15">
        <div className="hero-text">
          <h1>Visit Vila Shop Landing Page.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            cupiditate praesentium officiis repellat, suscipit earum ipsa
            excepturi quo dolores cumque voluptas sequi facilis debitis odit in
            minus nobis voluptatem ea?
          </p>
          <div className="--flex-start">
            <button className="--btn --btn-p">Learn More</button>
            <button className="--btn --btn-danger">Sign Up</button>
          </div>
        </div>
        <div className="--text-center">
          <img src={heroImage} alt="phone" width={200} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
