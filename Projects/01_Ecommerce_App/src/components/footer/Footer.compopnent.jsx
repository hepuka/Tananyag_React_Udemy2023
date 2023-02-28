import React from "react";
import styles from "./Footer.module.scss";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <div className={styles.footer}>
      &copy;{year}, Created by Zoltan KUN-FAGYAL - All Rights Reserved
    </div>
  );
};

export default Footer;
