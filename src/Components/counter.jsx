import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    // tags: ["tag1", "tag2", "tag3"],
    tags: [],
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;
    return (
      <ul>
        {this.state.tags.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <>
        {/* this method of rendering uses js truthy and falsey logic */}
        {this.state.tags.length === 0 && <p>Please create a new tag</p>}
        {this.renderTags()}
      </>
    );
  }
}

export default Counter;
