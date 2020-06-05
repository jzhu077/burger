import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import * as styles from "./ContactData.css";
import { IIngredients } from "../../../types/burger";
import { Axios } from "../../../axios";
import { Spinner } from "../../../components/UI/Spinner/Spinner";
import * as H from "history";
import { Input } from "../../../components/UI/Input/Input";

type dictionary = {
  [key: string]: elementConfig;
};

type elementConfig = {
  elementType: string;
  elementConfig: {
    type?: string;
    placeholder?: string;
    options?: { value: string; displayValue: string }[];
  };
  value: string;
};

class ContactData extends Component<{
  ingredients: IIngredients;
  price: number;
  history: H.History;
}> {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name"
        },
        value: ""
      },
      address: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Address"
        },
        value: ""
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "E-mail"
        },
        value: ""
      },
      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", displayValue: "Fastest" },
            { value: "cheapest", displayValue: "Cheapest" }
          ]
        },
        value: ""
      }
    } as dictionary,
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
    const formElementArray = [] as { id: string; config: elementConfig }[];
    for (let key in this.state.orderForm) {
      formElementArray.push({
        id: key,
        config: this.state.orderForm[key]
      });
    }
    let form = (
      <form>
        {formElementArray.map(elem => {
          const {
            config: { elementType, elementConfig, value }
          } = elem;
          return (
            <Input
              key={elem.id}
              elementType={elementType}
              elementConfig={elementConfig}
              value={value}
            />
          );
        })}

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
