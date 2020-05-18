import React, { Component } from "react";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import { IIngredients } from "../../types/burger";
import * as _ from "lodash";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import { Axios } from "../../axios";
import { Spinner } from "../../components/UI/Spinner/Spinner";
import { ErrorHandler } from "../../hoc/ErrorHandler/ErrorHandler";

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
    showOrder: false,
    loading: false,
    hasError: false
  };

  componentDidMount(): void {
    this.setState({ loading: true });
    Axios.get("/ingredients.json")
      .then(resp => {
        this.setState({ ingredients: resp.data, loading: false });
      })
      .catch(err => {
        this.setState({ hasError: true });
      });
  }

  orderCancelled = () => {
    this.setState({ showOrder: false });
  };

  orderContinue = () => {
    this.setState({ loading: true });
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: "JY",
        address: "fake address",
        email: "a@a.com"
      },
      deliveryMethod: "fast"
    };
    Axios.post("/orders.json", order)
      .then(resp => {
        this.setState({ loading: false, showOrder: false });
      })
      .catch(err => {
        console.error(err);
        this.setState({ loading: false, showOrder: false });
      });
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

    let orderSummary = (
      <OrderSummary
        price={this.state.totalPrice}
        orderCancelled={this.orderCancelled}
        orderContinue={this.orderContinue}
        ingredients={this.state.ingredients}
      />
    );
    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    let burger = this.state.hasError ? <p>Network Error</p> : <Spinner />;
    if (!this.state.loading) {
      burger = (
        <Auxiliary>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            ingredientAdded={this.addIngredient}
            ingredientRemoved={this.removeIngredient}
            disabled={disableInfo}
            price={this.state.totalPrice}
            purchasable={this.state.purchasable}
            ordered={this.showOrder}
          />
        </Auxiliary>
      );
    }
    return (
      <Auxiliary>
        <Modal show={this.state.showOrder} closeModal={this.closeModal}>
          {orderSummary}
        </Modal>
        {burger}
      </Auxiliary>
    );
  }
}

export default ErrorHandler(BurgerBuilder, Axios);
