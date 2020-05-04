import React, { Component } from "react";
import Auxiliary from "../Auxiliary/Auxiliary";
import Modal from "../../components/UI/Modal/Modal";
import { AxiosInstance, AxiosRequestConfig } from "axios";

export const ErrorHandler = (WrappedComponent: any, axios: AxiosInstance) => {
  return class extends Component {
    state = {
      error: ''
    } as any;

    componentWillMount(): void {
      axios.interceptors.request.use((req: AxiosRequestConfig) => {
        this.setState({ error: null });
        return req;
      });
      axios.interceptors.response.use(undefined, err => {
        this.setState({ error: err });
      });
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <Auxiliary>
          <Modal show={this.state.error} closeModal={this.errorConfirmedHandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Auxiliary>
      );
    }
  };
};
