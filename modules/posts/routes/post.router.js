const router = require("express").Router();

//Post controller
const getPostsController = require("../controller/getposts.controller");
//Get all posts
router.get("/posts", getPostsController);

module.exports = router;
