const Post = require("../model/post.model")
const { StatusCodes } = require("http-status-codes");

const getProfilePost = async (req, res) => {
  try {
    const { userid } = req.params;
    const post = await Post.find({ createdBy: { _id: userid } });
    res.status(StatusCodes.OK).json({ message: "success", post });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ error:"error" });
  }
};

module.exports = getProfilePost;
