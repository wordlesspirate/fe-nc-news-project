import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Title from "./components/Header";
import NavBar from "./components/NavBar";
import ArticlesList from "./components/ArticlesList";
import ArticleDetail from "./components/ArticleDetail";

function App() {
  return (
    <div className="App">
      <Title />
      <NavBar />
      <Router className="main">
        <ArticlesList path="/" />
        <ArticlesList path="/topics/:slug/articles" />
        <ArticleDetail path="/articles/:article_id" />
      </Router>
    </div>
  );
}

export default App;
