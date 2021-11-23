import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h1>Zero</h1> : count;
  }

  render() {
    return (
      <>
        <h1 className="m-2">{this.formatCount()}</h1>
        <button type="button" className="btn btn-primary m-2">
          Increment
        </button>
      </>
    );
  }
}

export default Counter;
