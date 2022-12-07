const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  message: { type: String, required: true },
  time: { type: String },
  video: { type: String },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: false,
  },
  subComments: [{ type: Array }],
});

module.exports = mongoose.model("Comments", commentSchema);
