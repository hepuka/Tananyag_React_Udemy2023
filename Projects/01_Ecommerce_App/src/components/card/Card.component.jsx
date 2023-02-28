/* ez egy Card komponens amelynek a children elemébe - a nyitó és a záró tag közé - lehet berakni az elemeket */

import React from "react";
import styles from "./Card.module.scss";

const Card = ({ children, cardClass }) => {
  return <div className={`${styles.card} ${cardClass}`}>{children}</div>;
};

export default Card;
