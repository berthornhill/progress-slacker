const express = require("express");
const { validate } = require("../../models/Meme");
const router = express.Router();
const Meme = require("../../models/Meme");
const validateMeme = require("../../validation/meme");
// const Template = require("../../models/Template");

const fs = require("fs");
const path = require("path");
require("dotenv/config");
const multer = require("multer");
const bodyParser = require("body-parser");

router.use(bodyParser.json());
router.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./routes/api/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

var upload = multer({ storage: storage });

// GETs all memes
router.get("/", (req, res) => {
  Meme.find()
    .sort({ created: -1 })
    .then((memes) => res.json(memes))
    .catch((err) => res.status(400).json(err));
});

// GETs single meme by ID
router.get("/:id", (req, res) => {
  debugger;
  Meme.findById(req.params.id).then((meme) => res.json(meme));
});

// GETs meme(s) by tag
router.get("/tags/tag", (req, res) => {
  Meme.find({ tags: req.query.tags }).then((memes) => res.json(memes));
});

// query: {tags: "Anime"}

// POSTS template to meme
router.post("/", upload.single("image"), (req, res, next) => {
  debugger;
  var obj = {
    img: req.body.img,
    title: req.body.title,
    tags: req.body.tags,
  };
  const { errors, isValid } = validateMeme(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newMeme = new Meme(obj);

  newMeme.save().then((meme) => res.json(meme));
});

module.exports = router;
