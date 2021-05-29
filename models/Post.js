const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  post_text: {
    type: String,
    require: true,
  },
  post_image: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  likedBy:[[{ type: mongoose.Schema.Types.ObjectId, ref: "User" }]],
  like:{
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", PostSchema);
