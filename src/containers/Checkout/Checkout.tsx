import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { IIngredients } from "../../types/burger";
import { RouteComponentProps, Route } from "react-router-dom";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1
    } as IIngredients
  };

  componentDidMount(): void {
    const query = new URLSearchParams(
      (this.props as RouteComponentProps).location.search
    );
    const ingredients: { [key: string]: number } = {};
    for (let param of query.entries()) {
      // ['salad', '1']
      ingredients[param[0]] = Number(param[1]);
    }
    this.setState({ ingredients });
  }

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
        />
        <Route path={(this.props as RouteComponentProps).match.path + '/contact-data'} component={ContactData}/>
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
