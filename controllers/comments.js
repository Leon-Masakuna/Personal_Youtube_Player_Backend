const Comment = require("../models/comments");

exports.createComment = (req, res, next) => {
  const comment = new Comment({
    message: req.body.message,
    videoId: req.body.videoId,
    userId: req.body.userId,
    parentComment: req.body.parentComment,
  });
  comment
    .save()
    .then(() => {
      res.status(201).json({
        message: "comment saved successfully!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.getAllComment = (req, res, next) => {
  Comment.find()
    .then((comments) => {
      res.status(200).json(comments);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.getOneComment = (req, res, next) => {
  Comment.findOne({
    _id: req.params.id,
  })
    .then((comment) => {
      res.status(200).json(comment);
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
};

exports.addSubComment = (req, res, next) => {
  const comment = Comment.find({
    _id: req.params.id,
  });
  Comment.updateOne({ _id: req.params.id }, comment)
    .then(() => {
      res.status(201).json({
        message: "Comment updated successfully!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};
