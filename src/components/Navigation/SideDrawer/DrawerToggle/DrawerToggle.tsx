import React from "react";
import * as styles from "./DrawerToggle.css";

const DrawerToggle = (props: any) => (
  <div className={styles.DrawerToggle} onClick={props.clicked}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default DrawerToggle;
