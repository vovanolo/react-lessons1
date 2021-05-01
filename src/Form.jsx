import React, { Component } from "react";

export default class Form extends Component {
  state = {
    name: "",
    password: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `You have been succesfuly registered as ${this.state.name} and your password is ${this.state.password}`
    );
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              placeholder="Введіть імя"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Password
            <input
              type="password"
              name="password"
              placeholder="введіть пароль"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <button type="submit">Зареєструватись як {this.state.name}</button>
        </form>
      </div>
    );
  }
}
