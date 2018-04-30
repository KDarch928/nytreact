import axios from "axios";

export default {
    //Gets all articles
    getSearchArticles: function (searchData) {
        return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=57d8947a7c0c4bd2b339d8dac0cfa844" + searchData);
    },
    getSavedArticles: function () {
        return axios.get("api/articles/saved");
    },
    deleteArticle: function (id) {
        return axios.delete("/api/articles/saved/" + id);
    },
    saveArticle: function (articleData) {
        return axios.post("/api/articles/saved", articleData);
    }
};