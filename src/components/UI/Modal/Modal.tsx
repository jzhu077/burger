import React from "react";
import * as styles from "./Modal.css";

const Modal = (props: any) => {
  return <div className={styles.Modal}>{props.children}</div>;
};

export default Modal;
