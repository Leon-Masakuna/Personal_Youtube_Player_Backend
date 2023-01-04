const mongoose = require("mongoose");

const likeSchema = mongoose.Schema(
  {
    commentId: { type: String, required: true },
    userId: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Likes", likeSchema);
