import React from "react";
import { Link } from "@reach/router";
import CommentAdder from "./CommentAdder";

const ArticleCard = ({
  article_id,
  title,
  topic,
  created_at,
  comment_count,
  votes
}) => {
  return (
    <article className="card-container">
      <p className="card-content">
        {" "}
        <Link to={`/articles/${article_id}`}>{title}</Link>
      </p>
      <p className="card-content">
        Topic: {topic} / Created at: {created_at} / Comments: {comment_count} /
        Votes: {votes}
      </p>
    </article>
  );
};

export default ArticleCard;
