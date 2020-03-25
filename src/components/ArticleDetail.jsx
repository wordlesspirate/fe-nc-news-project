import React, { Component } from "react";
import Loading from "./Loading";
import * as api from "../utils/api.js";
import Voting from "./Voting";
import CommentsList from "./CommentsList";

class ArticleDetail extends Component {
  state = {
    article: {},
    isLoading: true
  };

  componentDidMount() {
    api.fetchArticleById(this.props.article_id).then(article => {
      this.setState({ article, isLoading: false });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.article_id !== this.props.article_id) {
      api.fetchArticleById(this.props.article_id).then(article => {
        this.setState({ article, isLoading: false });
      });
    }
  }

  changeVoteBy = value => {
    api.patchArticleVotes(this.props.article_id, value).then(({ votes }) => {
      this.setState(({ article }) => {
        return { article: { ...article, votes } };
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
    if (this.state.isLoading) return <Loading />;
    const {
      article_id,
      title,
      body,
      author,
      created_at,
      votes,
      comment_count
    } = this.state.article;
    return (
      <div className="card-content">
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
        <p>{created_at}</p>
        <p>Comments: {comment_count}</p>

        <Voting
          count={votes}
          onUpvote={this.upvote}
          onDownvote={this.downvote}
        />
        <CommentsList article_id={article_id} />
      </div>
    );
  }
}

export default ArticleDetail;
