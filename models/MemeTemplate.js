// ImageURL, preview URL, Tags, creatorId
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MemeTemplateSchema = new Schema({
  //   title: {
  //     type: String,
  //     required: true,
  //   },
  // url: {
  //   type: String,
  //   required: true,
  // },
  img: {
    data: Buffer,
    contentType: String,
  },
});

const MemeTemplate = mongoose.model("memeTemplates", MemeTemplateSchema);
module.exports = MemeTemplate;
