import React from "react";
import * as styles from "./Order.css";

export const Order = (props: any) => (
  <div className={styles.Order}>
    <p>Ingredients: Salad (1)</p>
    <p>
      Price: <strong>USD 5.31</strong>
    </p>
  </div>
);
