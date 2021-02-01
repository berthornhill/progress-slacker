const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../../models/User");
const keys = require("../../config/keys");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const validateRegisterInput = require("../../validation/register");

router.post("/", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res
        .status(400)
        .json({ email: "User already registered under this email" });
    } else {
      const newUser = new User({
        handle: req.body.handle,
        email: req.body.email,
        password: req.body.password,
      });
    }

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (error, hash) => {
        if (error) throw error;
        newUser.password = hash;
        newUser
          .save()
          .then((user) => {
            const payload = { id: user.id, handle: user.handle };
            jwt.sign(
              payload,
              keys.secretOrKey,
              { expiresIn: 3600 },
              (err, token) => {
                res.json({ success: true, token: "Bearer " + token });
              }
            );
          })
          .catch((err) => console.log(err));
      });
    });
  });
});

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then((user) => {
    if (!user) {
      res.status(400).json({ email: "Email not found" });
    }
  });

  bcrypt.compare(password, user.password).then((isMatch) => {
    if (isMatch) {
      const payload = { id: user.id, handle: user.handle, email: user.email };
      jwt.sign(payload, keys.secretOrKey, { expires: 3600 }, (err, token) => {
        res.json({ success: true, token: "Bearer " + token });
      });
    } else {
      return res.status(400).json({ password: "Password incorrect" });
    }
  });
});

router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      handle: req.user.handle,
      email: req.user.email,
    });
  }
);
module.exports = router;
