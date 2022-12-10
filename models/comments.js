const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  message: { type: String, required: true },
  time: { type: String },
  videoId: { type: String },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: false,
  },
  subComments: { type: Array },
});

module.exports = mongoose.model("Comments", commentSchema);
