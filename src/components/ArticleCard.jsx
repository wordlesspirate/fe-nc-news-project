import React from "react";
import { Link } from "@reach/router";

const ArticleCard = ({
  article_id,
  title,
  topic,
  created_at,
  comment_count,
  votes,
}) => {
  return (
    <>
      <div class="box">
        <article class="media">
          <div class="media-left"></div>
          <div class="media-content">
            <div class="content">
              <p>
                <Link to={`/articles/${article_id}`}>{title}</Link>
              </p>
              <p>
                Topic: {topic} / Created at:
                {created_at}/ Comments:
                {comment_count} / Votes: {votes}
              </p>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default ArticleCard;
