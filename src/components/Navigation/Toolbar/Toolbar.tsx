import React from "react";
import * as styles from "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const Toolbar = (props: any) => {
  return (
    <header className={styles.Toolbar}>
      <div>MENU</div>
      <Logo />
      <NavigationItems />
    </header>
  );
};

export default Toolbar;
