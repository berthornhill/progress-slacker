const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const db = require("./config/keys").mongoURI;
const bodyParser = require("body-parser");

const Template = require("./models/Template");

const users = require("./routes/api/users");
const templates = require("./routes/api/templates");
const memes = require("./routes/api/memes");
const tags = require("./routes/api/tags");
const likes = require("./routes/api/likes");
const path = require("path");

mongoose
  .connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

app.use(
  bodyParser.urlencoded({
    extended: false,
    limit: "1mb",
  })
);
app.use(bodyParser.json());

app.set("view engine", "ejs");

app.use("/api/users", users);
app.use("/api/templates", templates);
app.use("/api/memes", memes);
app.use("/api/tags", tags);
app.use("/api/likes", likes);

// Static Files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/img", express.static(__dirname + "public/img"));

app.use(passport.initialize());

require("./config/passport")(passport);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}
