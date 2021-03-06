import React, { Component } from "react";
import Voting from "./Voting";
import { patchCommentVotes } from "../utils/api";

class CommentCard extends Component {
  state = {
    internalVotes: 0
  };

  changeVoteBy = value => {
    patchCommentVotes(this.props.comment_id, value).then(comment => {
      this.setState(currentState => {
        return { internalVotes: currentState.internalVotes + value };
      });
    });
  };

  upvote = () => {
    this.changeVoteBy(1);
  };

  downvote = () => {
    this.changeVoteBy(-1);
  };

  render() {
    const { votes, body, author, created_at, comment_id } = this.props;

    return (
      <article className="card-container">
        <div className="card-content">
          <p>{body}</p>

          <p>{author}</p>

          <p>Posted: {created_at}</p>

          <Voting
            count={votes + this.state.internalVotes}
            onUpvote={this.upvote}
            onDownvote={this.downvote}
          />

          <p>
            <button
              onClick={this.props.onDelete}
              id={comment_id}
              author={author}
              disabled={this.props.username !== author}
            >
              Delete comment
            </button>
          </p>
        </div>
      </article>
    );
  }
}

export default CommentCard;
