import React, { useContext } from "react";
import ThemeContext from "../../themeContext.js";
import "./Footer.css";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <footer className="--flex-center" data-theme={theme}>
      <p>Copyright&copy; 2023. - Created by KUN-FAGYAL Zoltan</p>
    </footer>
  );
};

export default Footer;
