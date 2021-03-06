import React, { Component } from "react";

export default class Counter extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {
    value: this.props.initialValue,
  };

  handleDecrement = () => {
    this.setState((prevState) => ({
      value: prevState.value - this.props.step,
    }));
  };

  handleIncrement = (e) => {
    this.setState((prevState) => ({
      value: prevState.value + this.props.step,
    }));
  };

  render() {
    const { title, subTitle } = this.props;
    return (
      <>
        <button onClick={this.handleDecrement}>Відняти</button>
        <span>{this.state.value}</span>
        <button onClick={this.handleIncrement}>Додати</button>
      </>
    );
  }
}
