import React from "react";
import * as styles from "./Button.css";

const Button = (props: {
  btnType: "Success" | "Danger";
  clicked?: any;
  children: any;
  disabled?: boolean;
}) => (
  <button
    disabled={props.disabled}
    className={[styles.Button, styles[props.btnType]].join(" ")}
    onClick={props.clicked}
  >
    {props.children}
  </button>
);

export default Button;
