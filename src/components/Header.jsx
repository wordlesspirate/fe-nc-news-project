import React from "react";
import { Link } from "@reach/router";

const Header = ({ username }) => {
  return (
    <header className="container">
      <section className="hero is-info">
        <div className="hero-body">
          <Link to="/">
            <h1 className="title">Northcoders News</h1>
          </Link>

          <h2 className="subtitle">account: {username}</h2>
        </div>
      </section>
    </header>
  );
};

export default Header;
