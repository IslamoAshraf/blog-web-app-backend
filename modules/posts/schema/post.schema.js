const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    type: {
      type: String,
      enum: ["ads", "post"],
      required: true,
      default: "post",
    },
    blocked: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
);

module.exports = postSchema;
