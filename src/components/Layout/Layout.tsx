import React, { Fragment } from "react";
import { Content } from "./LayoutStyle";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const Layout = (props: any) => (
  <Fragment>
    <Toolbar />
    <Content> {props.children} </Content>
  </Fragment>
);

export default Layout;
