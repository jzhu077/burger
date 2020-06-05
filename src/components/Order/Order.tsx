import React from "react";
import * as styles from "./Order.css";

export const Order = (props: any) => {
  const ingredients = [];
  for (let ingredient in props.ingredients) {
    ingredients.push({
      name: ingredient,
      amount: props.ingredients[ingredient]
    });
  }

  const ingredientOutput = ingredients.map(ing => {
    const { name, amount } = ing;
    return (
      <span
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "5px"
        }}
        key={name}
      >
        {name} ({amount})
      </span>
    );
  });
  return (
    <div className={styles.Order}>
      <p>Ingredients: {ingredientOutput}</p>
      <p>
        Price: <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong>
      </p>
    </div>
  );
};
