import React, { Component } from "react";
import Loading from "./Loading";
import * as api from "../utils/api.js";
import ArticleCard from "./ArticleCard";
import Dropdown from "./Dropdown";
import ErrorHandler from "./ErrorHandler";

const sortByOptions = [
  {
    key: 1,
    value: "created_at",
  },
  {
    key: 2,
    value: "comment_count",
  },
  {
    key: 3,
    value: "votes",
  },
];

const sortOrder = [
  {
    key: 1,
    value: "desc",
  },
  {
    key: 2,
    value: "asc",
  },
];

class ArticlesList extends Component {
  state = {
    articles: [],
    isLoading: true,
    sort_by: "created_at",
    order: "desc",
    error: false,
  };

  componentDidMount() {
    this.getArticles();
  }

  componentDidUpdate(prevProps) {
    if (this.props.slug !== prevProps.slug) {
      this.getArticles();
    }
  }

  getArticles = (query = {}) => {
    api
      .fetchArticles(this.props.slug, {
        sort_by: this.state.sort_by,
        order: this.state.order,
        ...query,
      })
      .then((articles) => {
        console.log(JSON.stringify(articles), query);
        this.setState({ isLoading: false, articles, ...query });
      })
      .catch((error) => {
        console.log(error);
        const status = error.response.status;
        const errorMessage = error.response.data.msg;
        this.setState({ error: { status, errorMessage }, isLoading: false });
      });
  };

  handleSortOptions = (event) => {
    this.getArticles({ sort_by: event.target.value });
  };

  handleSortOrder = (event) => {
    this.getArticles({ order: event.target.value });
  };

  render() {
    if (this.state.isLoading) return <Loading />;
    if (this.state.error) return <ErrorHandler {...this.state.error} />;
    return (
      <main className="container">
        <Dropdown options={sortByOptions} onChange={this.handleSortOptions} />
        <Dropdown options={sortOrder} onChange={this.handleSortOrder} />
        <div className="card">
          <div className="card-content">
            {this.state.articles.map((article) => {
              return (
                <ArticleCard
                  className="content"
                  key={article.article_id}
                  {...article}
                />
              );
            })}
          </div>
        </div>
      </main>
    );
  }
}

export default ArticlesList;
