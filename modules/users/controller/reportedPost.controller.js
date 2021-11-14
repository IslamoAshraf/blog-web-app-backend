const Post = require("../../posts/model/post.model");
const ReportPost = require("../../posts/model/reportedPost.model");
const { StatusCodes } = require("http-status-codes");
const reportPost = async (req, res) => {
  const { reportedBy, reportedPost, reportedPostComment } = req.body;
  //   console.log(reportedBy, reportedPost, reportedPostComment);
  try {
    const foundedPost = await Post.findById(reportedPost);
    //if post dont exist
    if (!foundedPost) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ messgae: "post you reported is not exist" });
    }
    //if user not authorized
    if (reportedBy !== req.user._id) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ messgae: "not authorized user" });
    }
    //post is not multi reported by same user
    const isReportedBySameUser = await ReportPost.findOne({ reportedBy });
    if (isReportedBySameUser) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "you already reported this post" });
    }

    //check authorized user and post is exist and reported post is not multi reported by same user
    const isValidReportedPost =
      reportedBy === req.user._id && foundedPost && !isReportedBySameUser;
    if (isValidReportedPost) {
      const reportedPostHolder = await ReportPost.insertMany({
        reportedBy,
        reportedPost,
        reportedPostComment,
      });
      return res
        .status(StatusCodes.OK)
        .json({ message: "successfully reported post", reportedPostHolder });
    }
  } catch (error) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ messgae: "some thing goes wrong" });
  }
};

module.exports = reportPost;
