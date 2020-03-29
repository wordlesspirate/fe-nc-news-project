import React, { Component } from "react";
import * as api from "../utils/api.js";
import Loading from "./Loading";
import CommentCard from "./CommentCard";

class CommentsList extends Component {
  state = {
    comments: [],
    isLoading: true
  };

  componentDidMount() {
    this.getComments();
  }

  getComments = () => {
    api.fetchArticleComments(this.props.article_id).then(comments => {
      this.setState({ comments, isLoading: false });
    });
  };

  shouldComponentUpdate() {
    return true;
  }

  handleCommentAdd = comment => {
    const { article_id, username } = this.props;

    api.postArticleComment(article_id, username, comment).then(comment => {
      this.setState(prevState => {
        return {
          comments: [comment, ...prevState.comments]
        };
      }, this.props.onComment(this.state.comments.length));
    });
  };

  handleCommentDelete = event => {
    const id = Number(event.target.id);

    api.deleteComment(id).then(
      this.setState(prevState => {
        return {
          comments: prevState.comments.filter(
            comment => comment.comment_id !== id
          )
        };
      })
    );
  };

  render() {
    if (this.state.isLoading) return <Loading />;
    return (
      <div>
        <h2>Comments</h2>

        {this.state.comments.map(({ comment_id, ...other }) => {
          return (
            <CommentCard
              key={comment_id}
              comment_id={comment_id}
              {...other}
              username={this.props.username}
              onDelete={this.handleCommentDelete}
            />
          );
        })}
      </div>
    );
  }
}

export default CommentsList;
