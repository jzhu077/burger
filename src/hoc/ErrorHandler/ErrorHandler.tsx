import React, { Component } from "react";
import Auxiliary from "../Auxiliary/Auxiliary";
import Modal from "../../components/UI/Modal/Modal";
import { AxiosInstance, AxiosRequestConfig } from "axios";

export const ErrorHandler = (WrappedComponent: any, axios: AxiosInstance) => {
  return class extends Component {
    state = {
      error: ""
    } as any;
    reqInterceptor: number = 0;
    respInterceptor: number = 0;

    componentWillMount(): void {
      this.reqInterceptor = axios.interceptors.request.use(
        (req: AxiosRequestConfig) => {
          this.setState({ error: null });
          return req;
        }
      );
      this.respInterceptor = axios.interceptors.response.use(undefined, err => {
        this.setState({ error: err });
      });
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };

    componentWillUnmount(): void {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.request.eject(this.respInterceptor);
    }

    render() {
      return (
        <Auxiliary>
          <Modal
            show={this.state.error}
            closeModal={this.errorConfirmedHandler}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Auxiliary>
      );
    }
  };
};
