import React from "react";
import "./App.css";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Layout from "./hoc/Layout/Layout";
import Checkout from "./containers/Checkout/Checkout";

const App = () => {
  return (
    <div>
      <Layout>
        <BurgerBuilder />
        <Checkout/>
      </Layout>
    </div>
  );
};

export default App;
