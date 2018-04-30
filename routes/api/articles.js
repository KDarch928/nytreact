const router = require("express").Router();
const articleController = require("../../controllers/articlesController");

router.route("/")
    .get(articleController.findAll)
    .post(articleController.create);

// Matches with "/api/articles/search
router.route("/search/:query")
    .get(articleController.searchArticles);


// Matches with "/api/articles/saved"
router.route("/saved")
    .get(articleController.findAll)
    .post(articleController.create);

//Matches with "/api/articles/saved/:id"
router.route("/saved/:id")
    .get(articleController.findById)
    .put(articleController.update)
    .delete(articleController.remove);

module.exports = router;
