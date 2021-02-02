const express = require("express");
const router = express.Router();
const Meme = require("../../models/meme");
const validateMemeInput = require("../../validation/meme_template");

// Create Meme

// Read Meme - get meme from url id (goes to reg meme section)
// Delete meme

router.post("/create", (req, res) => {
  const { errors, isValid } = validateMemeInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newMeme = new Meme({
    title: req.body.title,
    tag: req.body.tag,
    // w.e else goes to memes
  });
});
