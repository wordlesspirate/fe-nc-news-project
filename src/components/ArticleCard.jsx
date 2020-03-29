import React from "react";
import { Link } from "@reach/router";

const ArticleCard = ({
  article_id,
  title,
  topic,
  created_at,
  comment_count,
  votes
}) => {
  return (
    <article>
      <div className="media">
        <div className="media-content">
          <p className="title article-title">
            <Link to={`/articles/${article_id}`}>{title}</Link>
          </p>
          <p className="card-content">
            Topic: {topic} / Created at: {created_at} / Comments:{" "}
            {comment_count} / Votes: {votes}
          </p>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
