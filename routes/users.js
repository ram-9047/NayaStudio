var express = require("express");
var router = express.Router();
let User = require("../models/user");
let jwt = require("jsonwebtoken");

//sign-up user

router.post("/", async (req, res, next) => {
  try {
    let user = await User.create(req.body);
    if (!user) return res.json({ success: false, message: "user not found!" });
    res.json({ user, success: true });
  } catch (err) {
    return next(err);
  }
});

// login user

router.post("/login", async (req, res, next) => {
  let { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) return res.json({ success: false, message: "Invalid Email!" });
    user.verifyPassword(password, (err, matched) => {
      if (err) return next(err);
      if (!matched)
        return res.json({ success: false, message: "Invalid Password!" });

      // jwt

      jwt.sign(
        {
          userid: user._id,
          username: user.username,
          email: user.email,
          isadmin: user.isAdmin,
        },
        "secret",
        (err, token) => {
          if (err) return next(err);
          res.json({ success: true, message: "you are logged in", token });
        }
      );
    });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
