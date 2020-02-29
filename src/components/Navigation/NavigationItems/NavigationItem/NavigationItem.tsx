import React from "react";
import styles from "./NavigationItem.css";

const NavigationItem = (props: any) => (
  <li className={styles.NavigationItem}>
    <a href={props.link} className={props.active ? styles.active : undefined}>
      {props.children}
    </a>
  </li>
);

export default NavigationItem;
