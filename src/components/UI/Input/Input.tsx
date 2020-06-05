import React from "react";
import * as styles from "./Input.css";

export const Input = (props: any) => {
  let inputElement: JSX.Element;

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={styles.InputElement}
          {...props.elementConfig}
          value={props.value}
          onChange={() => {}}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={styles.InputElement}
          {...props.elementConfig}
          value={props.value}
        />
      );
      break;
    default:
      inputElement = (
        <input
          className={styles.InputElement}
          {...props.elementConfig}
          value={props.value}
          onChange={() => {}}
        />
      );
  }

  return (
    <div className={styles.Input}>
      <label className={styles.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};
