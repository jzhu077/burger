import React from "react";
import * as styles from "./Input.css";
import { elementConfig } from "../../../containers/Checkout/ContactData/ContactData";

interface props extends elementConfig {
  changed: (event: any) => void;
}

export const Input = (props: props) => {
  let inputElement: JSX.Element;

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={styles.InputElement}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={styles.InputElement}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          className={styles.InputElement}
          value={props.value}
          onChange={props.changed}
        >
          {props.elementConfig.options &&
            props.elementConfig.options.map(
              (option: { value: string; displayValue: string }) => (
                <option key={option.value} value={option.value}>
                  {option.displayValue}
                </option>
              )
            )}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={styles.InputElement}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }

  return (
    <div className={styles.Input}>
      {/*<label className={styles.Label}>{props.label}</label>*/}
      {inputElement}
    </div>
  );
};
