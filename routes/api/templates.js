const express = require("express");
const router = express.Router();
// const Meme = require("../../models/Meme");
const validateTemplate = require("../../validation/template");
const Template = require("../../models/Template");

const fs = require("fs");
const path = require("path");
require("dotenv/config");
const multer = require("multer");
const bodyParser = require("body-parser");
// Create Meme

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
// Read Meme - get meme from url id (goes to reg meme section)
// Delete meme

// GET "/api/meme_templates/"
router.get("/", (req, res) => {
  Template.find()
    .sort({ created: -1 })
    .then((templates) => res.json(templates))
    .catch((err) => res.status(400).json(err));
});

router.get("/:id", (req, res) => {
  Template.findById(req.params.id).then((Template) => res.json(Template));
});

// POST "/api/templates/"
router.post("/", upload.single("image"), (req, res, next) => {
  var obj = {
    img: {
      data: fs.readFileSync(
        path.join(__dirname + "/uploads/" + req.file.filename)
      ),
      // contentType: "image/png",
      contentType: req.file.mimetype,
    },
    title: req.body.title,
  };

  const { errors, isValid } = validateTemplate(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  const newTemplate = new Template(obj);
  newTemplate.save().then((template) => res.json(template));

  // Template.create(obj, (err, item) => {
  //   item.save().then((item) => res.json(item));
  // });
});

module.exports = router;
