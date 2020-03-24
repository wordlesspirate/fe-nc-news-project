import React from "react";
import { Link } from "@reach/router";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <h1 className="logo-container">Northcoders News</h1>
      </Link>
    </div>
  );
};

export default Header;
