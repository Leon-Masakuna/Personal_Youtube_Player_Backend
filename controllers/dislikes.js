const Dislike = require("../models/dislike");

exports.createDislike = (req, res, next) => {
  const dislike = new Dislike({
    commentId: req.body.commentId,
    userId: req.body.userId,
  });
  dislike
    .save()
    .then(() => {
      res.status(201).json({
        message: "dislike mention saved successfully!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.getAllDislike = (req, res, next) => {
  Dislike.find()
    .then((dislikes) => {
      res.status(200).json(dislikes);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.deleteDislike = (req, res, next) => {
  Dislike.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({
        message: "Dislike Mention Deleted Successfully!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};
