import React, { Component } from "react";
import Loading from "./Loading";
import * as api from "../utils/api.js";
import Voting from "./Voting";
import CommentsList from "./CommentsList";
import ErrorHandler from "./ErrorHandler";
import CommentToggler from "./CommentToggler";
import CommentAdder from "./CommentAdder";

class ArticleDetail extends Component {
  state = {
    article: {},
    isLoading: true,
    error: false
  };

  componentDidMount() {
    api
      .fetchArticleById(this.props.article_id)
      .then(article => {
        this.setState({ article, isLoading: false });
      })
      .catch(error => {
        const status = error.response.status;
        const errorMessage = error.response.data.msg;
        this.setState({ error: { status, errorMessage }, isLoading: false });
      });
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

  onCommentCountChange = count => {
    this.setState(({ article }) => {
      article.comment_count = count;

      return { article };
    });
  };

  render() {
    if (this.state.isLoading) return <Loading />;
    if (this.state.error) return <ErrorHandler {...this.state.error} />;
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
      <div className="container">
        <div className="card news">
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <div className="content article-body">
                  <p className="title article-title">{title}</p>
                  <p>{body}</p>
                  <p>{author}</p>
                  <p>{created_at}</p>
                  <p>Comments: {comment_count}</p>

                  <Voting
                    count={votes}
                    onUpvote={this.upvote}
                    onDownvote={this.downvote}
                  />

                  <CommentAdder onSubmit={this.handleCommentAdd} />

                  <CommentToggler>
                    <CommentsList
                      article_id={article_id}
                      username={this.props.username}
                      onComment={this.onCommentCountChange}
                    />
                  </CommentToggler>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ArticleDetail;
