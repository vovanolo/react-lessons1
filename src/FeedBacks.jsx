import React, { Component } from "react"

export default class FeedBacks extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  }

  handleGood = () => {
    this.setState((prevstate) => ({
      good: prevstate.good + 1,
    }))
    this.countTotalFeedback()
  }
  handleNeutral = () => {
    this.setState((prevstate) => ({
      neutral: prevstate.neutral + 1,
    }))
    this.countTotalFeedback()
  }
  handleBad = () => {
    this.setState((prevstate) => ({
      bad: prevstate.bad + 1,
    }))
    this.countTotalFeedback()
  }

  countTotalFeedback = () => {
    this.setState((prevstate) => ({
      total: prevstate.total + 1,
    }))
    this.countPositiveFeedbackPercentage()
  }

  countPositiveFeedbackPercentage = () => {
    this.setState({
      positivePercentage: Math.round(
        (this.state.good * 100) / this.state.total
      ),
    })
  }

  render() {
    return (
      <div>
        <h1>Please Leave FeedBack</h1>
        <button onClick={this.handleGood}>Good</button>
        <button onClick={this.handleNeutral}>Neutral</button>
        <button onClick={this.handleBad}>Bad</button>
        {this.state.total === 0 ? (
          <p>No feedback given</p>
        ) : (
          <>
            <h2>Statistics</h2>
            <p>good: {this.state.good}</p>
            <p>neutral: {this.state.neutral}</p>
            <p>bad: {this.state.bad}</p>
            <p>total: {this.state.total}</p>
            <p>positivePercentage: {this.state.positivePercentage}%</p>
          </>
        )}
      </div>
    )
  }
}
