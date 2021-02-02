const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const db = require("./config/keys").mongoURI;
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
require("dotenv/config");
const multer = require("multer");
const MemeTemplate = require("./models/MemeTemplate");

const users = require("./routes/api/users");
const memeTemplates = require("./routes/api/meme_templates");

mongoose
  .connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

// app.get("/", (req, res) => res.send("Hello World, I am Progress Slacker"));

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

var upload = multer({ storage: storage });

// app.get("/", (req, res) => {
//   imgModel.find({}, (err, items) => {
//     if (err) {
//       console.log(err);
//       res.status(500).send("An error occurred", err);
//     } else {
//       res.render("imagesPage", { items: items });
//     }
//   });
// });

app.post("/", upload.single("image"), (req, res, next) => {
  debugger;
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
      // item.save();
      res.redirect("/");
    }
  });
});

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

app.set("view engine", "ejs");

app.use("/api/users", users);
app.use("/api/memeTemplates", memeTemplates);

app.use(passport.initialize());

require("./config/passport")(passport);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
