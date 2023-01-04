const Like = require("../models/like");

exports.createLike = (req, res, next) => {
  const like = new Like({
    commentId: req.body.commentId,
    videoId: req.body.videoId,
    userId: req.body.userId,
  });
  like
    .save()
    .then(() => {
      res.status(201).json({
        message: "like mention saved successfully!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.getAllLike = (req, res, next) => {
  Like.find()
    .then((likes) => {
      res.status(200).json(likes);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};
