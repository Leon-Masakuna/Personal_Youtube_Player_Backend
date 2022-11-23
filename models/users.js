const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    firstName: {type: String, required: true},
    lastname: {type: String, required: true},
    email: {type: String, required: true},
    avatar: {type: String, required: true},
    linkedin: {type: String},
    github: {type: String},
    comments: {type: Array}
});

module.exports = mongoose.model("users", userSchema);