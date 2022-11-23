const Comment = require("../models/comments");

exports.createComment = (req, res, next) => {
    const comment = new Comment({
        message: req.body.message,
        time: req.body.time,
        video: req.body.video,
        user: req.body.user,
        subComment: req.body.subComment,
    });
    comment
        .save()
        .then(() => {
            res.status(201).json({
                message: "Post saved successfully!",
            });
        })
        .catch((error) => {
            res.status(400).json({
                error: error,
            })
        })
}

exports.getAllComment = (req, res, next) => {
    Comment.find()
        .then((comments) => {
            res.status(200).json(comments);
        })
        .catch((error) => {
            res.status(400).json({
                error: error
            })
        })
}