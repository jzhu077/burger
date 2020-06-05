import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import * as styles from "./ContactData.css";
import { IIngredients } from "../../../types/burger";
import { Axios } from "../../../axios";
import { Spinner } from "../../../components/UI/Spinner/Spinner";
import * as H from "history";
import { Input } from "../../../components/UI/Input/Input";

class ContactData extends Component<{
  ingredients: IIngredients;
  price: number;
  history: H.History;
}> {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: ""
    },

    loading: false
  };

  orderHandler = (event: any) => {
    event.preventDefault(); // prevent send request and reload the page
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "JY",
        address: "fake address",
        email: "a@a.com"
      },
      deliveryMethod: "fast"
    };
    Axios.post("/orders.json", order)
      .then(resp => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch(err => {
        console.error(err);
        this.setState({ loading: false });
      });
  };

  render() {
    let form = (
      <form>
        <Input
          inputtype="input"
          type="text"
          name="name"
          placeholder="Your Name"
        />
        <Input
          inputtype="input"
          type="text"
          name="email"
          placeholder="Your Email"
        />
        <Input
          inputtype="input"
          type="text"
          name="street"
          placeholder="Street"
        />
        <Input
          inputtype="input"
          type="text"
          name="postal"
          placeholder="Postal Code"
        />

        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={styles.ContactData}>
        <h4>Enter Your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
