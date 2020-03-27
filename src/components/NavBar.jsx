import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../utils/api.js";

class NavBar extends Component {
  state = {
    topics: []
  };

  componentDidMount() {
    api.fetchTopics().then(topics => {
      this.setState({ topics });
    });
  }

  render() {
    return (
      <nav className="nav">
        {this.state.topics.map(({ slug }) => {
          return (
            <Link to={`/topics/${slug}`} key={slug}>
              <p className="nav-elements">{slug}</p>
            </Link>
          );
        })}
      </nav>
    );
  }
}

export default NavBar;
