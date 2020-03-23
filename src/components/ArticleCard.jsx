import React from "react";

const ArticleCard = ({ title, topic }) => {
  return (
    <article className="card-container">
      {title}
      {topic}
    </article>
  );
};

export default ArticleCard;
