import axios from "axios";

export default {
    //Gets all articles
    getSearchArticles: function (searchData) {
        return axios.get("/api/articles/search/" + searchData);
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