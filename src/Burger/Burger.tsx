import React from "react";
import * as classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = (props: any) => {
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top"></BurgerIngredient>
      <BurgerIngredient type="cheese"></BurgerIngredient>
      <BurgerIngredient type="meat"></BurgerIngredient>
      <BurgerIngredient type="bread-bottom"></BurgerIngredient>
    </div>
  );
};

export default Burger;
