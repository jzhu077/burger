import React from "react";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import Button from "../../UI/Button/Button";

const OrderSummary = (props: any) => {
  const ingredientSummary = Object.keys(props.ingredients).map(
    (key: string) => {
      return (
        <li key={key}>
          <span style={{ textTransform: "capitalize" }}>{key}</span>
          {props.ingredients[key]}
        </li>
      );
    }
  );

  return (
    <Auxiliary>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: {props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button clicked={props.orderCancelled} btnType="Danger">
        CANCEL
      </Button>
      <Button clicked={props.orderContinue} btnType="Success">
        CONTINUE
      </Button>
    </Auxiliary>
  );
};

export default OrderSummary;
