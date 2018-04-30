const db = require("../models");
const axios = require("axios");

// Defining methods for the articleController
module.exports = {
    // searchArticles: function(req,res) {
    //     const authKey = "57d8947a7c0c4bd2b339d8dac0cfa844";
    //     const queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey;
    //     console.log("I make it to seachArticle");
    //     console.log(req.params.query);
    //     axios.get(queryURLBase + req.params.query)
    //         .then(({data: {results}}) => {
    //             console.log(results);
    //             res.json(results)
    //         })
    //         .catch(err => res.status(422).json(err));
    // },
    findAll: function(req,res){
        db.Article
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Article
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Article
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Article
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Article
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};