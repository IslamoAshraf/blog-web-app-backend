const Post = require("../model/post.model").default;
const { StatusCodes } = require("http-status-codes");

module.exports = async (req, res) => {
  const { title, desc } = req.body;
  try {
    console.log(req.user);
    const newPost = await Post.insertMany({
      title,
      desc,
      createdBy: req.user._id,
    });
    res.status(StatusCodes.OK).json({ message: "post added", data: newPost });
  } catch (error) {}
};
