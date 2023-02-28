import React from "react";
import logo from "../../assets/logo.png";
import { FaMoon, FaSun } from "react-icons/fa";
import "./Header.css";

const Header = ({ myTheme, onToggleTheme, onSwitch }) => {
  return (
    <header data-theme={myTheme}>
      <div className="container --flex-between">
        <div className="logo">
          <img src={logo} alt="logo" width={170} />
        </div>
        <nav>
          <ul className="--flex-between">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </nav>

        <div onClick={onToggleTheme}>
          <span className="toggle-btn">
            <FaMoon color="pink" size={16} />
            <FaSun color="yellow" size={16} />
            <div className={onSwitch ? "ball move" : "ball"}></div>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
