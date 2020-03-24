import React from "react";
import Voting from "./Voting";

const CommentCard = ({ comment_id, author, body, votes, created_at }) => {
  return (
    <article className="card-container">
      <div className="card-content">
        <p>{body}</p>

        <p>{author}</p>

        <p>{votes}</p>

        <p>Posted: {created_at}</p>

        <Voting voteUrl={`/comments/${comment_id}`} />
      </div>
    </article>
  );
};

export default CommentCard;
