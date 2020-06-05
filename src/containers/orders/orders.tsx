import React, { Component } from "react";
import { Order } from "../../components/Order/Order";
import { Axios } from "../../axios";
import { ErrorHandler } from "../../hoc/ErrorHandler/ErrorHandler";

class Orders extends Component {
  state = {
    orders: [],
    loading: true
  } as { orders: any[]; loading: boolean };

  componentDidMount() {
    Axios.get("/orders.json")
      .then(res => {
        const orders = [];
        for (let key in res.data) {
          orders.push({ ...res.data[key], id: key });
        }
        this.setState({ loading: false, orders });
      })
      .catch(err => {
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <div>
        {this.state.orders.map(order => (
          <Order
            key={order.id}
            ingredients={order.ingredients}
            price={order.price}
          />
        ))}
      </div>
    );
  }
}

export default ErrorHandler(Orders, Axios);
