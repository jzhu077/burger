import React from "react";
import * as styles from "./Toolbar.css";
import Logo from "../../Logo/Logo";

const Toolbar = (props: any) => {
  return (
    <header className={styles.Toolbar}>
      <div>MENU</div>
      <Logo />
      <nav>...</nav>
    </header>
  );
};

export default Toolbar;
