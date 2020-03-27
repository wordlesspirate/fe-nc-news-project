import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Title from "./components/Title";
import NavBar from "./components/NavBar";
import ArticlesList from "./components/ArticlesList";
import ArticleDetail from "./components/ArticleDetail";

class App extends React.Component {
  state = {
    username: "jessjelly"
  };

  render() {
    return (
      <div className="App">
        <Title username={this.state.username} />
        <NavBar />
        <Router className="main">
          <ArticlesList path="/" />
          <ArticlesList path="/topics/:slug" />
          <ArticleDetail
            username={this.state.username}
            path="/articles/:article_id"
          />
        </Router>
      </div>
    );
  }
}

export default App;
