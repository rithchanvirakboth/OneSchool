const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");

// @route     POST api/register
// @desc      Regiter a user
// @access    Public
router.post(
  "/",
  [
    check("name", "Please enter a user name").not().isEmpty(),
    check("email", "Please input a valid email").isEmail(),
    check("password", "Password must be at least 6 characters!").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    const { name, email, password, major, interests } = req.body;

    try {
      const foundUser = await User.findOne({ email });
      // Check if the user's email is already exist
      if (foundUser)
        return res.status(400).json({ msg: "User already exists!" });

      const profileImage = "uploads/profile_stub_image.png";
      const user = new User({
        name,
        email,
        password,
        major,
        interests,
        profileImage,
      });

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);
      user.password = hashedPassword;
      // Save user to DB
      await user.save();

      // Registering JWT
      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
      console.log("Register Success!");
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Server Error!" });
    }
  }
);

router.get("/", (req, res) => {
  res.json("register page");
});

module.exports = router;
