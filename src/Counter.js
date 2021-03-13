import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    title: "safasfasfasfasf",
    description: "sfsaf",
  };

  render() {
    // const { title, description } = this.props;
    const { title, description } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    );
  }
}
