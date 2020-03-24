import React, { Component } from "react";
import Loading from "./Loading";
import * as api from "../utils/api.js";
import ArticleCard from "./ArticleCard";

class ArticlesList extends Component {
  state = {
    articles: [],
    isLoading: true
  };

  componentDidMount() {
    this.getArticles();
  }

  componentDidUpdate(prevProps) {
    if (this.props.slug !== prevProps.slug) {
      this.getArticles(this.props.slug);
    }
  }

  getArticles = () => {
    api.fetchArticles(this.props.slug).then(articles => {
      this.setState({ articles, isLoading: false });
    });
  };

  render() {
    if (this.state.isLoading) return <Loading />;
    return (
      <main>
        {this.state.articles.map(props => {
          return <ArticleCard key={props.article_id} {...props} />;
        })}
      </main>
    );
  }
}

export default ArticlesList;
