import React from "react";
import "./App.css";
import Title from "./components/Title";
import TopicsList from "./components/TopicsList";

function App() {
  return (
    <div className="App">
      <h1>
        <Title />
      </h1>
      <TopicsList />
    </div>
  );
}

export default App;
