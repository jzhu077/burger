import React, { Fragment } from "react";
import * as styles from "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";

const Modal = (props: any) => {
  return (
    <Fragment>
      <Backdrop show={props.show} clicked={props.closeModal}/>
      <div
        className={styles.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0"
        }}
      >
        {props.children}
      </div>
    </Fragment>
  );
};

// This is to improve the performance by checking if the previous show is the same  as the next show.

// The same thing can be done using a class component named PureComponent that does a shallow comparison between the
// new and the old props.

// However the in this case, since we only care about one attribute of props, show, in the class component
// using shouldComponentUpdate (nextProps, nextState) {return nextProps.show !== this.props,show}
// should be used in stead.

function shouldUseMemory(prevProps: any, nextProps: any) {
  return prevProps.show === nextProps.show && nextProps.children === prevProps.children;
}

export default React.memo(Modal, shouldUseMemory);
