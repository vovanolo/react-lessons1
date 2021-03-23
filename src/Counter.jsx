import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    number: this.props.initialValue,
  };

  // handleClick = () => {
  //   this.setState({ number: 20000 });
  //   // this.state.number = 20000;
  // };
  handleMinus = () => {
    this.setState((prevState) => ({
      number: prevState.number - 1,
    }));
  };

  handlePlus = () => {
    this.setState((prevState) => ({
      number: prevState.number + 1,
    }));
  };

  render() {
    // const { name, year, description } = this.props;
    const { number } = this.state;
    return (
      <div>
        {/* <h1>{name}</h1>
        <p>{year}</p>
        <b>{description}</b> */}
        <button onClick={this.handleMinus}>Відняти</button>
        <span>{number}</span>
        <button onClick={this.handlePlus}>Додати</button>
      </div>
    );
  }
}
