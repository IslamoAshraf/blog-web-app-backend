const mongoose = require("mongoose");
const postSchema = require("../schema/post.schema");

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
