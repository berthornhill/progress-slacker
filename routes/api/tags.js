const express = require("express");
const router = express.Router();
const Tag = require("../../models/Tag");

router.get("/", (req, res) => {
  Tag.find()
    .sort({ created: -1 })
    .then((tags) => res.json(tags))
    .catch((err) => res.status(400).json(err));
});

router.get("/:id", (req, res) => {
  Tag.findById(req.params.id).then((tag) => res.json(tag));
});

router.post("/", (req, res) => {
  // if valid

  const newTag = new Tag({
    title: req.body.title,
    // memes: req.body.memes,
  });

  newTag.save().then((tag) => res.json(tag));
});

module.exports = router;
