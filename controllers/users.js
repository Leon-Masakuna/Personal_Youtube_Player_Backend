const User = require('../models/users');

exports.createUser = (req, res, next) => {
    const user = new User({
        names: req.body.names,
        email: req.body.email,
        avatar: req.body.avatar,
        linkedin: req.body.linkedin,
        github: req.body.github,
    });
    user
        .save()
        .then(() => {
            res.status(201).json({
                message: "User successfully created!",
            });
        })
        .catch((error) => {
            res.status(400).json({
                error: error
            });
        });
};

exports.getAllUser = (req, res, next) => {
    User.find()
        .then((users) => {
            res.status(200).json(users)
        })
        .catch((error) => {
            res.status(400).json({
                error: error,
            });
        });
};
