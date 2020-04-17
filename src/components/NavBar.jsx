import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../utils/api.js";

class NavBar extends Component {
  state = {
    topics: [],
  };

  componentDidMount() {
    api.fetchTopics().then((topics) => {
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
                <Link to={`/topics/${slug}`} key={slug} className="navbar-item">
                  {slug}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
