const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  comment_text: {
    type: String,
    require: true,
  },
  comment_image: {
    type: String,
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  },
});

module.exports = mongoose.model("Comment", CommentSchema);
