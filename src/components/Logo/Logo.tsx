import React from "react";

import burgerLogo from "../../assets/images/burger.png";
import styles from "./Logo.css";

const Logo = (props: any) => (
  <div className={styles.Logo}>
    <img src={burgerLogo} alt="burger" />
  </div>
);

export default Logo;
