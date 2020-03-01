import React, { Fragment } from "react";
import { Content } from "./LayoutStyle";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const Layout = (props: any) => (
  <Fragment>
    <Toolbar />
    <SideDrawer />
    <Content> {props.children} </Content>
  </Fragment>
);

export default Layout;
