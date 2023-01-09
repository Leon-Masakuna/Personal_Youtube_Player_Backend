const Notification = require("../models/notifications");

exports.createNotification = (req, res, next) => {
  const notification = new Notification({
    description: req.body.description,
    commentId: req.body.commentId,
    userIdSender: req.body.userIdSender,
    userIdSenderName: req.body.userIdSenderName,
    userIdSenderImage: req.body.userIdSenderImage,
    userIdReceiver: req.body.userIdReceiver,
  });
  notification
    .save()
    .then(() => {
      res.status(201).json({
        message: "notification sent successfully !",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.getAllNotification = (req, res, next) => {
  Notification.find()
    .then((notifications) => {
      res.status(200).json(notifications);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};
