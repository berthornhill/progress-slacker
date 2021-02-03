// name, tags
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MemeSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  tags: {
    type: Array,
    required: true,
  },
  //   img: {
  //     data: Buffer,
  //     contentType: String,
  //   },
  created: {
    type: Date,
    default: Date.now,
  },
});

const Meme = mongoose.model("Memes", MemeSchema);
module.exports = Meme;
