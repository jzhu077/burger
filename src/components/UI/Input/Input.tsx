import React from "react";
import * as styles from "./Input.css";

export const Input = (props: any) => {
  let inputElement: JSX.Element;

  switch (props.inputtype) {
    case "input":
      inputElement = <input className={styles.InputElement} {...props} />;
      break;
    case "textarea":
      inputElement = <textarea className={styles.InputElement} {...props} />;
      break;
    default:
      inputElement = <input className={styles.InputElement} {...props} />;
  }

  return (
    <div className={styles.Input}>
      <label className={styles.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};
