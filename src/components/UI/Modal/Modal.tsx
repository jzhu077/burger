import React, { Fragment } from "react";
import * as styles from "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";

const Modal = (props: any) => {
  return (
    <Fragment>
      <Backdrop show={props.showOrder} clicked={props.closeModal}></Backdrop>
      <div
        className={styles.Modal}
        style={{
          transform: props.showOrder ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.showOrder ? "1" : "0"
        }}
      >
        {props.children}
      </div>
    </Fragment>
  );
};

// This is to improve the performance by checking if the previous showOrder is the same  as the next showOrder.

// The same thing can be done using a class component named PureComponent that does a shallow comparison between the
// new and the old props.

// However the in this case, since we only care about one attribute of props, showOrder, in the class component
// using shouldComponentUpdate (nextProps, nextState) {return nextProps.showOrder !== this.props,showOrder}
// should be used in stead.

function shouldUseMemory(prevProps: any, nextProps: any) {
  return prevProps.showOrder === nextProps.showOrder && nextProps.children === prevProps.children;
}

export default React.memo(Modal, shouldUseMemory);
