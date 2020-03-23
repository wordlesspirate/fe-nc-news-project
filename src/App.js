import React from "react";
import "./App.css";
import Title from "./components/Title";
import TopicsList from "./components/TopicsList";
import ArticlesList from "./components/ArticlesList";

function App() {
  return (
    <div className="App">
      <Title />
      <TopicsList />
      <ArticlesList />
    </div>
  );
}

export default App;
