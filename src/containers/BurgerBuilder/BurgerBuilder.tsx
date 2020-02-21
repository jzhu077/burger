import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../Burger/Burger";
import BuildControls from "../../Burger/BuildControls/BuildControls";
import { IIngredients } from "../../types/burger";
import * as _ from "lodash";

const INGREDIENT_PRICES = {
  salad: 0.02,
  bacon: 0.3,
  cheese: 0.2,
  meat: 2
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    } as IIngredients,
    totalPrice: 0
  };

  addIngredient = (type: keyof IIngredients) => {
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount + 1;
    const newIngredients = {
      ...this.state.ingredients
    };
    newIngredients[type] = newCount;

    const newIngredientPrice = INGREDIENT_PRICES[type];
    const newPrice = this.state.totalPrice + newIngredientPrice;

    this.setState({ ingredients: newIngredients, totalPrice: newPrice });
  };

  removeIngredient = (type: keyof IIngredients) => {
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount - 1;

    if (newCount >= 0) {
      const newIngredients = {
        ...this.state.ingredients
      };
      newIngredients[type] = newCount;

      const newIngredientPrice = INGREDIENT_PRICES[type];
      const newPrice = this.state.totalPrice - newIngredientPrice;

      this.setState({ ingredients: newIngredients, totalPrice: newPrice });
    }
  };

  render(): React.ReactElement<any> {
    const disableInfo = {} as _.Dictionary<boolean>;

    for (let key in this.state.ingredients) {
      disableInfo[key] = this.state.ingredients[key as keyof IIngredients] <= 0;
    }

    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredient}
          ingredientRemoved={this.removeIngredient}
          disabled={disableInfo}
          price={this.state.totalPrice}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
