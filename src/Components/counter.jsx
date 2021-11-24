import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    // tags: ["tag1", "tag2", "tag3"],
    tags: [],
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;
<<<<<<< HEAD
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
=======
    return (
      <ul>
        {this.state.tags.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    );
  }

  render() {
    return <>{this.renderTags()}</>;
  }
>>>>>>> 175e959f4358457d455f61e9cdded0c6dc299e2a
}

export default Counter;
