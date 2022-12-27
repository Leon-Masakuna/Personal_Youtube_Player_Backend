const mongoose = require("mongoose");

const commentSchema = mongoose.Schema(
  {
    message: { type: String, required: true },
    videoId: { type: String },
    userId: { type: String },
    parentComment: { type: String, default: null },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Comments", commentSchema);
