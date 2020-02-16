import React, { Fragment } from "react";
import * as style from "./Layout.css";

const Layout = (props: any) => (
  <Fragment>
    <div> Tool bar, sideDrawer , Backdrop</div>
    <main className={style.content}> {props.children} </main>
  </Fragment>
);

export default Layout;
