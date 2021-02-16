const mongoose = require("mongoose")
const Schema = mongoose.Schema

const LikeSchema = new Schema({
  user: {
    type: Integer,
  },
  meme: {
    type: Array,
  },
})

const Like = mongoose.model("Likes", LikeSchema)
module.exports = Like
