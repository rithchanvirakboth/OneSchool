const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  major: {
    type: String,
  },
  reason: {
    type: String,
  },
  dob: {
    type: Date,
  },
  bio: {
    type: String,
  },
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  groups: [{ type: mongoose.Schema.Types.ObjectId, ref: "Group" }],
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
