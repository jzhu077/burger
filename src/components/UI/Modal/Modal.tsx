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

export default Modal;
