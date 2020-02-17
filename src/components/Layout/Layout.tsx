import React, { Fragment } from "react";
import { Content } from "./LayoutStyle";

const Layout = (props: any) => (
  <Fragment>
    <div> Tool bar, sideDrawer , Backdrop</div>
    <Content> {props.children} </Content>
  </Fragment>
);

export default Layout;
