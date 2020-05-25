import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { IIngredients } from "../../types/burger";
import { RouteComponentProps, Route } from "react-router-dom";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
  state = {
    ingredients: {} as IIngredients,
    totalPrice: 0
  };

  componentDidMount(): void {
    const query = new URLSearchParams(
      (this.props as RouteComponentProps).location.search
    );
    const ingredients: { [key: string]: number } = {};
    let price = 0;
    for (let param of query.entries()) {
      // ['salad', '1']
      if (param[0] !== "price") {
        ingredients[param[0]] = Number(param[1]);
      } else {
        price = Number(param[1]);
      }
    }
    this.setState({ ingredients, totalPrice: price });
  }

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
        />
        <Route
          path={
            (this.props as RouteComponentProps).match.path + "/contact-data"
          }
          render={props => (
            <ContactData
              ingredients={this.state.ingredients}
              price={this.state.totalPrice}
              {...props}
            />
          )}
        />
      </div>
    );
  }

  private checkoutCancelledHandler = () => {
    (this.props as RouteComponentProps).history.goBack();
  };

  private checkoutContinuedHandler = () => {
    (this.props as RouteComponentProps).history.replace(
      "/checkout/contact-data"
    );
  };
}

export default Checkout;
