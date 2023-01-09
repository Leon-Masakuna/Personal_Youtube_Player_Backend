const mongoose = require("mongoose");

const notificationSchema = mongoose.Schema(
  {
    description: { type: String, required: true },
    commentId: { type: String, required: true },
    userIdSender: { type: String, required: true },
    userIdSenderName: { type: String },
    userIdSenderImage: { type: String },
    userIdReceiver: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Notifications", notificationSchema);
