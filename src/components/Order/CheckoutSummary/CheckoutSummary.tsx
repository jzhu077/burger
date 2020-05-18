import React, { Component } from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import * as styles from "./CheckoutSummary.css"

const CheckoutSummary = (props: any) => {
  return (
    <div className={styles.CheckoutSummary}>
      <h1>We hope it tastes well!</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients}/>
      </div>
        <Button btnType="Danger" clicked  children/>
        <Button btnType="Danger"  clicked children/>
    </div>
  );
};

export default CheckoutSummary;
