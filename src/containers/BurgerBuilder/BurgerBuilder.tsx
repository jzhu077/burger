import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../Burger/Burger";

class BurgerBuilder extends Component {
  render(): React.ReactElement<any> {
    return (
      <Aux>
        <Burger />
        <div>Build Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
