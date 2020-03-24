import React, { Fragment } from "react";
import { Content } from "./LayoutStyle";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends React.Component {
  state = {
    showSideDrawer: false
  };

  sideDrawerClosedHandler = () => [this.setState({ showSideDrawer: false })];

  sideDrawerToggleHandler = () => [
    this.setState((prevState: any) => ({
      showSideDrawer: !prevState.showSideDrawer
    }))
  ];

  render() {
    return (
      <Fragment>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <Content> {this.props.children} </Content>
      </Fragment>
    );
  }
}

export default Layout;
