const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const Post = require("../models/Post");

// @route     POST api/post
// @desc      Posting a post
// @access    Private

router.post("/", auth, async (req, res) => {
  const { post_data } = req.body;
  try {
    const newPost = new Post({ post_data, user: req.user.id });
    await newPost.save();
    res.json(newPost);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Server Error!" });
  }
});
// @route     GET api/post
// @desc      Getting posts
// @access    Private

router.get("/", auth, async (req, res) => {
  try {
    const posts = await Post.find({ user: req.user.id });
    res.json(posts);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Server Error!" });
  }
});

module.exports = router;
