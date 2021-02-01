const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const db = require("./config/keys").mongoURI;
const bodyParser = require("body-parser");

const users = require("./routes/api/users");

mongoose
  .connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello World, I am Progress Slacker"));

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

app.use("/api/users", users);

app.use(passport.initialize());
require("./config/passport")(passport);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
