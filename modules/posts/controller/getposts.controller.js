const Post = require("../model/post.model");
const { StatusCodes } = require("http-status-codes");

module.exports = async (req, res) => {
  const posts = await Post.find({ type: "post" })
    .populate({
      path: "createdBy",
      select: "email username location",
    })

  res.status(StatusCodes.OK).json({ message: "success", data: posts });
};
