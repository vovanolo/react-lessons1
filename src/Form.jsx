import React, { Component } from "react";

export default class Form extends Component {
  state = {
    name: "",
    surname: "",
    description: "",
    agreed: false,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleCheckboxChange = (e) => {
    this.setState({ agreed: e.target.checked });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(`You have been registered as ${this.state.name} ${this.state.surname}
    Your comment ${this.state.description}
    `);
  };

  render() {
    return (
      <div>
        Our Form
        <form onSubmit={this.handleFormSubmit}>
          <label>
            please enter some text
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            please enter your surname
            <input
              type="text"
              name="surname"
              value={this.state.surname}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <textarea
            name="description"
            id=""
            cols="30"
            rows="10"
            value={this.state.description}
            onChange={this.handleChange}
          ></textarea>
          <br />
          <label>
            <input
              type="checkbox"
              checked={this.state.agreed}
              onChange={this.handleCheckboxChange}
            />
            Погодитись з умовами користувача
          </label>
          <br />
          <button type="submit" disabled={!this.state.agreed}>
            Register as {this.state.name} {this.state.surname}
          </button>
        </form>
      </div>
    );
  }
}
