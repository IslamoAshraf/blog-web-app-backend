const mongoose = require("mongoose");
const reportedPostSchema = require("../schema/reportedPost.schema");

const ReportedPost = mongoose.model("ReportedPost", reportedPostSchema);

module.exports = ReportedPost;
