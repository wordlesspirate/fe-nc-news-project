const axios = require("axios");

const httpClient = axios.create({
  baseURL: "https://be-nc-news-project.herokuapp.com/api"
});

const fetchTopics = () => {
  return httpClient.get("/topics").then(({ data: { topics } }) => {
    return topics;
  });
};

const fetchArticles = (slug, query) => {
  return httpClient
    .get("/articles", {
      params: { topic: slug, ...query }
    })
    .then(({ data: { articles } }) => {
      return articles;
    });
};

const fetchArticleById = article_id => {
  return httpClient
    .get(`/articles/${article_id}`)
    .then(({ data: { article } }) => {
      return article;
    });
};

const fetchArticleComments = article_id => {
  return httpClient
    .get(`/articles/${article_id}/comments`)
    .then(({ data: { comments } }) => {
      return comments;
    });
};

const patchArticleVotes = (article_id, vote) => {
  return httpClient
    .patch(`/articles/${article_id}`, { inc_votes: vote })
    .then(({ data: { article } }) => {
      return article;
    });
};

const patchCommentVotes = (comment_id, vote) => {
  return httpClient
    .patch(`/comments/${comment_id}`, { inc_votes: vote })
    .then(({ data: { comment } }) => {
      return comment;
    });
};

const postArticleComment = (article_id, username, comment) => {
  return httpClient
    .post(`/articles/${article_id}/comments`, {
      username: username,
      body: comment
    })
    .then(({ data: { comment } }) => {
      return comment;
    });
};

module.exports = {
  fetchTopics,
  fetchArticles,
  fetchArticleById,
  fetchArticleComments,
  patchArticleVotes,
  patchCommentVotes,
  postArticleComment
};
