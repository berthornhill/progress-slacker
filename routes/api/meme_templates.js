const express = require("express");
const router = express.Router();
const Meme = require("../../models/Meme");
const validateMemeInput = require("../../validation/meme_template");
const MemeTemplate = require("../../models/MemeTemplate");

const fs = require("fs");
const path = require("path");
require("dotenv/config");
const multer = require("multer");
const bodyParser = require("body-parser");
// Create Meme

router.use(bodyParser.json());

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./routes/api/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

var upload = multer({ storage: storage });
// Read Meme - get meme from url id (goes to reg meme section)
// Delete meme

// GET "/api/meme_templates/"
router.get("/", (req, res) => {
  MemeTemplate.find({}, (err, items) => {
    if (err) {
      console.log(err);
      res.status(500).send("An error occurred", err);
    } else {
      res.json({ items });
    }
  });
});

router.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
router.get("/:id", (req, res) => {
  MemeTemplate.findById(req.params.id).then((MemeTemplate) =>
    res.json(MemeTemplate)
  );
});

// POST "/api/meme_templates/"
router.post("/", upload.single("image"), (req, res, next) => {
  var obj = {
    img: {
      data: fs.readFileSync(
        path.join(__dirname + "/uploads/" + req.file.filename)
      ),
      contentType: "image/png",
    },
  };
  MemeTemplate.create(obj, (err, item) => {
    if (err) {
      console.log(err);
    } else {
      item
        .save()
        // res.redirect("/");
        .then((item) => res.json(item));
    }
  });
});

module.exports = router;
