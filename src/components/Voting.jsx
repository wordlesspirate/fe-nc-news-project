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
        <p className="buttons">
          <button
            className="button"
            disabled={!enableUpvote}
            onClick={this.upvote}
          >
            <span className="icon is-small">
              <i className="fas fa-hand-spock"></i>
            </span>
          </button>
          {this.props.count}
          <button
            className="button"
            disabled={!enableDownvote}
            onClick={this.downvote}
          >
            <span className="icon is-small">
              <i className="fas fa-angry"></i>
            </span>
          </button>
        </p>
      </>
    );
  }
}

export default Voting;
