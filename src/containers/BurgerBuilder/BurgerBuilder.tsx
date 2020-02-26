import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import { IIngredients } from "../../types/burger";
import * as _ from "lodash";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

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
    totalPrice: 0,
    purchasable: false,
    showOrder: false
  };

  orderCancelled = () => {
    this.setState({ showOrder: false });
  };

  orderContinue = () => {
    alert("Continue");
  };

  showOrder = () => {
    this.setState({ showOrder: true });
  };

  closeModal = () => {
    this.setState({ showOrder: false });
  };

  updatePurchaseState(ingredients: IIngredients) {
    const sum = Object.keys(ingredients)
      .map((key: string) => {
        return ingredients[key as keyof IIngredients];
      })
      .reduce((sum, cur) => {
        return sum + cur;
      }, 0);
    this.setState({ purchasable: sum > 0 });
  }

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
    this.updatePurchaseState(newIngredients);
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
      this.updatePurchaseState(newIngredients);
    }
  };

  render(): React.ReactElement<any> {
    const disableInfo = {} as _.Dictionary<boolean>;

    for (let key in this.state.ingredients) {
      disableInfo[key] = this.state.ingredients[key as keyof IIngredients] <= 0;
    }

    return (
      <Aux>
        <Modal showOrder={this.state.showOrder} closeModal={this.closeModal}>
          <OrderSummary
            price={this.state.totalPrice}
            orderCancelled={this.orderCancelled}
            orderContinue={this.orderContinue}
            ingredients={this.state.ingredients}
          ></OrderSummary>
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredient}
          ingredientRemoved={this.removeIngredient}
          disabled={disableInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          ordered={this.showOrder}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
