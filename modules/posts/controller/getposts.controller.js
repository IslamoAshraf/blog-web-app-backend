const Post = require("../model/post.model")
const { StatusCodes } = require("http-status-codes");

module.exports = async (req, res) => {
  let postArray = [];
  const posts = await Post.find({
    type: "post",
    blocked: "false",
  }).populate({
    path: "createdBy",
    select: "email username location deactivated blocked",
    match: { blocked: false, deactivated: false },
  });
  //Exclude posts created by deactivated or blocked user
  posts.filter((ele) => {
    if (ele.createdBy) {
      postArray.push(ele);
    }
  });
  res.status(StatusCodes.OK).json({ message: "success", data: postArray });
};
