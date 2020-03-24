import React, { Component } from "react";
import * as api from "../utils/api";
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

  componentDidUpdate(prevProps) {
    if (this.props.article_id !== prevProps.article_id) {
      this.getComments(this.props.article_id);
    }
  }

  getComments = () => {
    api.fetchArticleComments(this.props.article_id).then(comments => {
      this.setState({ comments, isLoading: false });
    });
  };

  render() {
    if (this.state.isLoading) return <Loading />;
    return (
      <main>
        <h2>Comments</h2>
        {this.state.comments.map(({ comment_id, ...other }) => {
          return <CommentCard key={comment_id} {...other} />;
        })}
      </main>
    );
  }
}

export default CommentsList;
