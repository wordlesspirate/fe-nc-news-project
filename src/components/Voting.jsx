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
        <button disabled={!enableUpvote} onClick={this.upvote}>
          Kudos
        </button>
        <p>{this.props.count}</p>
        <button disabled={!enableDownvote} onClick={this.downvote}>
          Boo
        </button>
      </>
    );
  }
}

export default Voting;
