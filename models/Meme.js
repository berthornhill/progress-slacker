// name, tags
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MemeSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  tags: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  creatorId: {
    type: String,
    required: true,
  },
})

const Meme = mongoose.model("Memes", MemeSchema);
module.exports = Meme;
