const express = require("express");
const router = express.Router();
const User = require("../../models/User");

// takes in { user: id, meme: id}
//  adds meme id to user's array of liked memes
router.post("/", (req, res) => {
  debugger;
  console.log("Hello Likes!");
  debugger;
});

router.get("/:id", (req, res) => {
  //   res.json({ hello: "I work" });
  res.send("test");
});

module.exports = router;
