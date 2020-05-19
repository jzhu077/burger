import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import * as styles from "./ContactData.css";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: ""
    }
  };

  render() {
    return (
      <div className={styles.ContactData}>
        <h4>Enter Your Contact Data</h4>
        <form>
          <input
            className={styles.Input}
            type="text"
            name="name"
            placeholder="Your Name"
          />
          <input
            className={styles.Input}
            type="text"
            name="email"
            placeholder="Your Email"
          />
          <input
            className={styles.Input}
            type="text"
            name="street"
            placeholder="Street"
          />
          <input
            className={styles.Input}
            type="text"
            name="postal"
            placeholder="Postal Code"
          />

          <Button btnType="Success" clicked>
            {" "}
            ORDER{" "}
          </Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
