const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippit: {
        type: String,
        required: true
    },
    author: {
        type: String
    },
    pubdate: {
        type: String
    },
    url: {
        type: String
    },
    comment: {
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }
});


//This Creates our model from the above schema
var Article = mongoose.model("Article", ArticleSchema);

//Export the article model
module.exports = Article;