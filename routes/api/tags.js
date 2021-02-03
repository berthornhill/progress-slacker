const express = require("express");
const router = express.Router();
const Tag = require("../../models/Tag");

router.post("/", (req, res) => {
  // if valid

  const newTag = new Tag({
    title: req.body.title,
    memes: req.body.memes.split(" "),
  });

  newTag.save().then((tag) => res.json(tag));
});

module.exports = router;
