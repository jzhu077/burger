import React, { Fragment } from "react";
import "./Layout.css";

const Layout = (props: any) => (
  <Fragment>
    <div> Tool bar, sideDrawer , Backdrop</div>
    <main className="content"> {props.children} </main>
  </Fragment>
);

export default Layout;
