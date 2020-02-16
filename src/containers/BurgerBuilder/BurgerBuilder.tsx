import React, { Component } from "react";
import Aux from "../../hoc/Aux";

class BurgerBuilder extends Component {
  render(): React.ReactElement<any> {
    return (
      <Aux>
        <div>Burger</div>
        <div>Build Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
