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
    type: { enum: ["ads", "post"], required: true },
    blocked: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = postSchema;
