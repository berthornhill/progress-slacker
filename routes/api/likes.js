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
    debugger;
    res.json(user.likes);
  });
});

router.get("/", (req, res) => {
  debugger;

  console.log("in like router");
});

router.delete("/:id", (req, res) => {
  //   res.json({ hello: "I work" });
  res.send("test");
});

module.exports = router;
