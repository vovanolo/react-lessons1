import React, { Component } from "react"

export default class Form extends Component {
  state = {
    gender: null,
  }

  handleRadioChange = (e) => {
    this.setState({ gender: e.target.value })
  }

  render() {
    return (
      <div>
        Heeloo Form
        <h1>this is a form</h1>
        <form>
          <label>
            Male
            <input
              type="radio"
              name="gender"
              checked={this.state.gender === "male"}
              value="male"
              onChange={this.handleRadioChange}
            />
          </label>
          <label>
            Female
            <input
              type="radio"
              name="gender"
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.handleRadioChange}
            />
          </label>
          {this.state.gender === null && <p>pleease check the gender</p>}
        </form>
      </div>
    )
  }
}
