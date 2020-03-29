import React, { Component } from "react";

class Voting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      enableUpvote: true,
      enableDownvote: true
    };
  }

  upvote = event => {
    this.setState(
      { enableUpvote: false, enableDownvote: true },
      this.props.onUpvote
    );
  };

  downvote = event => {
    this.setState(
      { enableUpvote: true, enableDownvote: false },
      this.props.onDownvote
    );
  };

  render() {
    const { enableDownvote, enableUpvote } = this.state;
    return (
      <>
        <p class="buttons">
          <button class="button" disabled={!enableUpvote} onClick={this.upvote}>
            <span class="icon is-small">
              <i class="fas fa-hand-spock"></i>
            </span>
          </button>
          <p>{this.props.count}</p>
          <button
            class="button"
            disabled={!enableDownvote}
            onClick={this.downvote}
          >
            <span class="icon is-small">
              <i class="fas fa-angry"></i>
            </span>
          </button>
        </p>
      </>
    );
  }
}

export default Voting;
