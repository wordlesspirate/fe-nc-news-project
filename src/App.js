import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Title from "./components/Title";
import NavBar from "./components/NavBar";
import ArticlesList from "./components/ArticlesList";

function App() {
  return (
    <div className="App">
      <Title />
      <NavBar />
      <Router className="main">
        <ArticlesList path="/" />
        <ArticlesList path="/topics/:slug/articles" />
      </Router>
    </div>
  );
}

export default App;
