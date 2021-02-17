const express = require("express");
const router = express.Router();
const User = require("../../models/User");

const fs = require("fs");
const path = require("path");
const multer = require("multer");
const bodyParser = require("body-parser"); // json

// takes in { user: id, meme: id}
//  adds meme id to user's array of liked memes
router.post("/", (req, res) => {
  User.findByIdAndUpdate(
    { _id: req.body.id },
    { $push: { likes: req.body.meme } },
    function (err, result) {}
  ).then((user) => {
    res.json(user.likes);
  });
});

router.get("/:id", (req, res) => {
  User.findById(req.params.id).then((user) => {
    res.json(user.likes);
  });
});

router.delete("/", (req, res) => {
  debugger
  User.findByIdAndUpdate(
    { _id: req.query.id },
    { $pull: { likes: req.query.meme } },
    function (err, result) {},
  ).then((user) => {
    res.json(user.likes)
  })
});

module.exports = router;
