const router = require("express").Router();
const validator = require("express-joi-validation").createValidator({});

//Post controller
const getPostsController = require("../controller/getposts.controller");

//User schema joe validation middleware
const requestValidation = require("../../../validation/vaildationFactoryFun");
const {
  addPost,
  editPost,
  ProfilePost,
} = require("../../../validation/post.validation");

//Authorization middleware
const isAuthorized = require("../../../authorization/isAuthorized");
const addpostsController = require("../controller/addposts.controller");
const updatePost = require("../controller/updatepost.controller");
const getProfilePost = require("../controller/getprofilepost.controller");
const reportPost = require("../../users/controller/reportedPost.controller");

//Get all posts
router.get("/posts", isAuthorized(["user"]), getPostsController);

//Add posts
router.post(
  "/posts",
  isAuthorized(["user"]),
  requestValidation(addPost),
  addpostsController
);

//update post
router.patch(
  "/posts/",
  isAuthorized(["user"]),
  requestValidation(editPost),
  updatePost
);

//get profile posts
router.get("/posts/:userid", requestValidation(ProfilePost), getProfilePost);

//report post
router.post("/posts/report", isAuthorized(["user"]), reportPost);

module.exports = router;
