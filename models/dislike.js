const mongoose = require("mongoose");

const dislikeSchema = mongoose.Schema(
  {
    commentId: { type: String, required: true },
    userId: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Dislikes", dislikeSchema);
