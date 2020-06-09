import React from "react";
import * as styles from "./Input.css";
import { elementConfig } from "../../../containers/Checkout/ContactData/ContactData";

interface props extends elementConfig {
  changed: (event: any) => void;
}

export const Input = (props: props) => {
  const {
    touched,
    isValid,
    elementType,
    elementConfig,
    value,
    changed
  } = props;
  let inputElement: JSX.Element;
  const inputClasses = [styles.InputElement];
  let validationError = null;

  if (!isValid && touched) {
    inputClasses.push(styles.Invalid);
    validationError = (
      <p className={styles.ValidationError}>
        Please enter a valid {elementType}!
      </p>
    );
  }

  switch (elementType) {
    case "input":
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...elementConfig}
          value={value}
          onChange={changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={inputClasses.join(" ")}
          {...elementConfig}
          value={value}
          onChange={changed}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          className={inputClasses.join(" ")}
          value={value}
          onChange={changed}
        >
          {elementConfig.options &&
            elementConfig.options.map(
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
          className={inputClasses.join(" ")}
          {...elementConfig}
          value={value}
          onChange={changed}
        />
      );
  }

  return (
    <div className={styles.Input}>
      {/*<label className={styles.Label}>{label}</label>*/}
      {inputElement}
      {validationError}
    </div>
  );
};
