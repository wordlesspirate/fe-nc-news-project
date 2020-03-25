import React from "react";

const CommentAdder = () => {
  return (
    <form>
      <label>
        Username:
        <input type="text" required id="username" />
      </label>
      <label>
        Comment:
        <input type="text" required />
      </label>
      <button>Submit Comment</button>
    </form>
  );
};

export default CommentAdder;

// POST / api / articles /: article_id / comments
// Request body accepts
// an object with the following properties:
// username
// body
