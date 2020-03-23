const axios = require("axios");

const fetchTopics = () => {
  return axios
    .get("https://be-nc-news-project.herokuapp.com/api/topics")
    .then(({ data: { topics } }) => {
      console.log(topics);
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

module.exports = { fetchTopics, fetchArticles };
