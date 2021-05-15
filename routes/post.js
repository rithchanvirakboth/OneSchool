const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const Post = require("../models/Post");

// @route     POST api/post
// @desc      Posting a post
// @access    Private

router.post("/", auth, async (req, res) => {
  const { post_text, post_image } = req.body;
  try {
    const newPost = new Post({ post_text, post_image, user: req.user.id });
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
// @route     PUT api/post/:id
// @desc      Updating posts
// @access    Private

router.put("/:id", auth, async (req, res) => {
  const { post_text, post_image } = req.body;

  const postFields = {};
  if (post_text) postFields.post_text = post_text;
  if (post_image) postFields.post_image = post_image;

  try {
    let post = await Post.findById(req.params.id);

    if (!post) return res.status(400).json({ msg: "Post not found!" });

    // Make sure user owns the post
    if (post.user.toString() !== req.user.id)
      return res.status(401).json({ msg: "No authorization!" });

    post = await Post.findByIdAndUpdate(
      req.params.id,
      { $set: postFields },
      { new: true }
    );
    res.json(post);
  } catch (error) {
    console.error(error.message);
    console.error(error);
    res.status(500).json({ msg: "Server Error!" });
  }
});
// @route     DELETE api/post/:id
// @desc      Deleting posts
// @access    Private

router.delete("/:id", auth, async (req, res) => {
  try {
    let post = await Post.findById(req.params.id);

    if (!post) return res.status(400).json({ msg: "Post not found!" });

    // Make sure user owns the post
    if (post.user.toString() !== req.user.id)
      return res.status(401).json({ msg: "No authorization!" });

    post = await Post.findByIdAndDelete(req.params.id);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Server Error!" });
  }
});

module.exports = router;
