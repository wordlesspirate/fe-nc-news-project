import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import ArticlesList from "./components/ArticlesList";
import ArticleDetail from "./components/ArticleDetail";
import NotFound from "./components/NotFound";

class App extends React.Component {
  state = {
    username: "jessjelly"
  };

  render() {
    return (
      <div className="App">
        <Header username={this.state.username} />
        <NavBar className="navbar" />
        <Router className="main">
          <ArticlesList path="/" />
          <ArticlesList path="/topics/:slug" />
          <ArticleDetail
            username={this.state.username}
            path="/articles/:article_id"
          />
          <NotFound default />
        </Router>
      </div>
    );
  }
}

export default App;
