import React from "react";
import * as styles from "./Backdrop.css";

const Backdrop = (props: any) =>
  props.show ? (
    <div className={styles.Backdrop} onClick={props.clicked}></div>
  ) : null;
export default Backdrop;
