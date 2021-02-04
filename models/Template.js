// ImageURL, preview URL, Tags, creatorId
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TemplateSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  tags: {
    type: String,
    required: true,
  },
  img: {
    // data: Buffer,
    type: String,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

const Template = mongoose.model("Templates", TemplateSchema);
module.exports = Template;
