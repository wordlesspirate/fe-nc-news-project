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
      <div className="container">
        <nav className="navbar is-light">
          <div className="navbar-start">
            {this.state.topics.map(({ slug }) => {
              return (
                <div className="navbar-item">
                  <Link to={`/topics/${slug}`} key={slug}>
                    {slug}
                  </Link>
                </div>
              );
            })}
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
