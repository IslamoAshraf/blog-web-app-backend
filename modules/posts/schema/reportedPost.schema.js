const mongoose = require("mongoose");

const reportedPostSchema = new mongoose.Schema(
  {
    reportedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    reportedPost: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
    reportedPostComment: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = reportedPostSchema;
