const router = require("express").Router();
//Post controller
const getPostsController = require("../controller/getposts.controller");

//User schema joe validation middleware
const requestValidation = require("../../../validation/vaildationFactoryFun");
const { addPost } = require("../../../validation/post.validation");

//Authorization middleware
const isAuthorized = require("../../../authorization/isAuthorized");
const addpostsController = require("../controller/addposts.controller");

//Get all posts
router.get("/posts", isAuthorized(["user"]), getPostsController);

//Get all posts
router.post(
  "/posts/create",
  isAuthorized(["user"]),
  requestValidation(addPost),
  addpostsController
);

module.exports = router;
