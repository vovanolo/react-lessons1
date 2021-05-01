import React, { Component } from "react";

export default class Form extends Component {
  state = {
    value: "",
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div>
        <label>
          Email
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
      </div>
    );
  }
}
