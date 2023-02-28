import React from "react";
import "./Footer.css";

const Footer = ({ myTheme }) => {
  return (
    <footer className="--flex-center" data-theme={myTheme}>
      <p>Copyright&copy; 2023. - Created by KUN-FAGYAL Zoltan</p>
    </footer>
  );
};

export default Footer;
