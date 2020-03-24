import React from "react";
import { Link } from "@reach/router";

const ArticleCard = ({ article_id, title, topic }) => {
  return (
    <article className="card-container">
      <p className="card-content">
        {" "}
        <Link to={`/articles/${article_id}`}>{title}</Link>
      </p>
      <p className="card-content">{topic}</p>
    </article>
  );
};

export default ArticleCard;
