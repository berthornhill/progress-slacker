const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const db = require("./config/keys").mongoURI;
const bodyParser = require("body-parser");

const MemeTemplate = require("./models/MemeTemplate");

const users = require("./routes/api/users");
const memeTemplates = require("./routes/api/meme_templates");

mongoose
  .connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

app.set("view engine", "ejs");

app.use("/api/users", users);
app.use("/api/meme_templates", memeTemplates);

// Static Files
app.use(express.static('public'))
app.use('/css',express.static(__dirname + 'public/css'))
app.use('/img',express.static(__dirname + 'public/img'))


app.use(passport.initialize());

require("./config/passport")(passport);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
