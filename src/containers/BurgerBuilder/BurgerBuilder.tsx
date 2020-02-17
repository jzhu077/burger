import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import * as style from "./BurgerBuilder.css";

class BurgerBuilder extends Component {
  render(): React.ReactElement<any> {
    return (
      <Aux>
        <div className={style.test}>Burger</div>
        <div>Build Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
