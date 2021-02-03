//tags

// App Academy
// Animals
// Anime
// Gaming
// Tv Shows
// Movies
// Politcs
// Sports
// Internet

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TagSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  memes: {
    type: Array,
    required: true,
  },
  templates: {
    type: Array,
    required: true,
  },
});

const Tag = mongoose.model("Tags", TagSchema);
module.exports = Tag;
