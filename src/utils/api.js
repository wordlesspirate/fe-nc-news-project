import axios from "axios";

const httpClient = axios.create({
  baseURL: "https://be-nc-news-project.herokuapp.com/api"
});

export const fetchTopics = () => {
  return httpClient.get("/topics").then(({ data: { topics } }) => {
    return topics;
  });
};

export const fetchArticles = (slug, query) => {
  return httpClient
    .get("/articles", {
      params: { topic: slug, ...query }
    })
    .then(({ data: { articles } }) => {
      return articles;
    });
};

export const fetchArticleById = article_id => {
  return httpClient
    .get(`/articles/${article_id}`)
    .then(({ data: { article } }) => {
      return article;
    });
};

export const fetchArticleComments = article_id => {
  return httpClient
    .get(`/articles/${article_id}/comments`)
    .then(({ data: { comments } }) => {
      return comments;
    });
};

export const patchArticleVotes = (article_id, vote) => {
  return httpClient
    .patch(`/articles/${article_id}`, { inc_votes: vote })
    .then(({ data: { article } }) => {
      return article;
    });
};

export const patchCommentVotes = (comment_id, vote) => {
  return httpClient
    .patch(`/comments/${comment_id}`, { inc_votes: vote })
    .then(({ data: { comment } }) => {
      return comment;
    });
};

export const postArticleComment = (article_id, username, comment) => {
  return httpClient
    .post(`/articles/${article_id}/comments`, {
      username: username,
      body: comment
    })
    .then(({ data: { comment } }) => {
      return comment;
    });
};

export const deleteComment = comment_id => {
  return httpClient.delete(`/comments/${comment_id}`);
};
