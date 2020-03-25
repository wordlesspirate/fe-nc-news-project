import React from "react";
import { Link } from "@reach/router";

const Title = ({ username }) => {
  return (
    <div className="header">
      <Link to="/">
        <h1 className="logo-container">Northcoders News</h1>
      </Link>

      <p>Logged username: {username}</p>
    </div>
  );
};

export default Title;
