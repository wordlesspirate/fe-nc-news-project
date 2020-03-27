import React, { Component } from "react";

class CommentToggler extends Component {
  state = {
    isVisible: false
  };

  handleClick = () => {
    this.setState(currentState => {
      return { isVisible: !currentState.isVisible };
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.isVisible ? "Hide Comments" : "Show Comments"}
        </button>
        {this.state.isVisible && this.props.children}
      </div>
    );
  }
}

export default CommentToggler;
