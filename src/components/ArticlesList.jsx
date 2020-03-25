import React, { Component } from "react";
import Loading from "./Loading";
import * as api from "../utils/api.js";
import ArticleCard from "./ArticleCard";
import Dropdown from "./Dropdown";

const sortByOptions = [
  {
    key: 1,
    value: "created_at"
  },
  {
    key: 2,
    value: "comment_count"
  },
  {
    key: 3,
    value: "votes"
  }
];

const sortOrder = [
  {
    key: 1,
    value: "desc"
  },
  {
    key: 2,
    value: "asc"
  }
];

class ArticlesList extends Component {
  state = {
    articles: [],
    isLoading: true,
    sort_by: "created_at",
    order: "desc"
  };

  componentDidMount() {
    this.getArticles();
  }

  getArticles = query => {
    api
      .fetchArticles(this.props.slug, {
        sort_by: this.state.sort_by,
        order: this.state.order,
        ...query
      })
      .then(articles => {
        this.setState({ articles, ...query, isLoading: false });
      });
  };

  handleSortOptions = event => {
    this.getArticles({ sort_by: event.target.value });
  };

  handleSortOrder = event => {
    this.getArticles({ order: event.target.value });
  };

  render() {
    if (this.state.isLoading) return <Loading />;
    return (
      <main>
        <Dropdown options={sortByOptions} onChange={this.handleSortOptions} />
        <Dropdown options={sortOrder} onChange={this.handleSortOrder} />

        {this.state.articles.map(props => {
          return <ArticleCard key={props.article_id} {...props} />;
        })}
      </main>
    );
  }
}

export default ArticlesList;
