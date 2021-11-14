const Post = require("../model/post.model").default;
const { StatusCodes } = require("http-status-codes");

const updatePost = async (req, res) => {
  const { title, desc, id } = req.body;

  try {
    const foundedPost = await Post.findById(id).populate({
      path: "createdBy",
      select: "_id",
    });

    //check if post exist
    if (!foundedPost) {
      res.status(StatusCodes.BAD_REQUEST).json({ message: "post not found" });
    }

    //terminate if the post not authorized with the same user
    if (req.user._id !== foundedPost.createdBy._id) {
      res.status(StatusCodes.UNAUTHORIZED);
    }

    const updatedPost = await Post.findByIdAndUpdate(
      { _id: id },
      { title, desc }
    );
    res.status(StatusCodes.OK).json({
      message: "success",
      updatedPost,
    });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: "post not found" });
  }
};

module.exports = updatePost;
