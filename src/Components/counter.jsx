import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  formatCount = () => {
    const { count } = this.state; // object destructuring
    return count === 0 ? "Zero" : count;
  };

  getBadgeClass = () => {
    return this.state.count === 0
      ? "badge m-2 bg-warning text-dark"
      : "badge m-2 bg-primary";
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <>
        <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        <button
          className="btn btn-secondary btn-sm"
          // pass a reference to the function, not the function
          onClick={this.handleIncrement}
        >
          Increment
        </button>
      </>
    );
  }
}

export default Counter;
