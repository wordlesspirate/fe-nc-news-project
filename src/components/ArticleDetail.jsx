import React, { Component } from "react";
import Loading from "./Loading";
import * as api from "../utils/api.js";

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

  render() {
    if (this.state.isLoading) return <Loading />;
    const {
      title,
      body,
      author,
      created_at,
      votes,
      comments
    } = this.state.article;
    return (
      <div className="card-content">
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
        <p>{created_at}</p>
        <p>{votes}</p>
        <p>{comments}</p>
      </div>
    );
  }
}

export default ArticleDetail;
