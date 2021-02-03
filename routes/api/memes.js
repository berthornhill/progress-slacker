const express = require("express");
const { validate } = require("../../models/Meme");
const router = express.Router();
const Meme = require("../../models/Meme");
const validateMeme = require("../../validation/meme");
// const Template = require("../../models/Template");

// const fs = require("fs");
// const path = require("path");
// require("dotenv/config");
// const multer = require("multer");
// const bodyParser = require("body-parser");

// router.use(bodyParser.json());
// router.use(
//   bodyParser.urlencoded({
//     extended: false,
//   })
// );

router.get("/", (req, res) => {
  Meme.find()
    .sort({ created: -1 })
    .then((memes) => res.json(memes))
    .catch((err) => res.status(400).json(err));
});

router.get("/:id", (req, res) => {
  Meme.findById(req.params.id).then((meme) => res.json(meme));
});

router.post("/", (req, res) => {
  const { errors, isValid } = validateMeme(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newMeme = new Meme({
    title: req.body.title,
  });

  newMeme.save().then((meme) => res.json(meme));
});

module.exports = router;
