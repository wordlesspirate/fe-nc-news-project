const axios = require("axios");

const fetchTopics = () => {
  return axios
    .get("https://be-nc-news-project.herokuapp.com/api/topics")
    .then(({ data: { topics } }) => {
      return topics;
    });
};

const fetchArticles = slug => {
  return axios
    .get("https://be-nc-news-project.herokuapp.com/api/articles", {
      params: { topic: slug }
    })
    .then(({ data: { articles } }) => {
      return articles;
    });
};

const fetchArticleById = article_id => {
  return axios
    .get(`https://be-nc-news-project.herokuapp.com/api/articles/${article_id}`)
    .then(({ data: { article } }) => {
      console.log("axios, article by id --->", article);
      return article;
    });
};

const fetchArticleComments = article_id => {
  return axios
    .get(
      `https://be-nc-news-project.herokuapp.com/api/articles/${article_id}/comments`
    )
    .then(({ data: { comments } }) => {
      console.log("axios, comments by id --->", comments);
      return comments;
    });
};

module.exports = {
  fetchTopics,
  fetchArticles,
  fetchArticleById,
  fetchArticleComments
};
