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

type validationRules = {
  required?: boolean;
  minLength?: number;
  valid: boolean;
};

export type elementConfig = {
  elementType: string;
  elementConfig: {
    type?: string;
    placeholder?: string;
    options?: { value: string; displayValue: string }[];
  };
  value: string;
  validation?: validationRules;
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
        value: "",
        validation: {
          required: true,
          minLength: 3,
          valid: true
        }
      },
      address: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Address"
        },
        value: "",
        validation: {
          required: true,
          valid: true
        }
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "E-mail"
        },
        value: "",
        validation: {
          required: true,
          valid: true
        }
      },
      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", displayValue: "Fastest" },
            { value: "cheapest", displayValue: "Cheapest" }
          ]
        },
        value: "",
        validation: {
          required: false,
          valid: true
        }
      }
    } as dictionary,
    loading: false
  };

  orderHandler = (event: any) => {
    event.preventDefault(); // prevent send request and reload the page
    this.setState({ loading: true });
    const formData = {} as { [key: string]: string };
    for (let formElementIdentifier in this.state.orderForm) {
      formData[formElementIdentifier] = this.state.orderForm[
        formElementIdentifier
      ].value;
    }

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      orderData: formData
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

  checkValidity = (value: string, rules: validationRules): boolean => {
    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    return isValid;
  };

  inputChangedHandler = (event: any, inputIdentifier: string) => {
    const updatedForm = { ...this.state.orderForm };
    const updatedFormElement = { ...updatedForm[inputIdentifier] };
    updatedFormElement.value = event.target.value;
    if (updatedFormElement.validation) {
      updatedFormElement.validation.valid = this.checkValidity(
        updatedFormElement.value,
        updatedFormElement.validation
      );
    }
    console.log(updatedFormElement.validation);
    updatedForm[inputIdentifier] = updatedFormElement;
    this.setState({ orderForm: updatedForm });
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
      <form onSubmit={this.orderHandler}>
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
              changed={event => this.inputChangedHandler(event, elem.id)}
            />
          );
        })}

        <Button btnType="Success">ORDER</Button>
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
