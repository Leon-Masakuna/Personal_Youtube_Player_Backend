const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    names: {type: String, required: true},
    email: {type: String, required: true},
    avatar: {type: String, required: true},
    linkedin: {type: String},
    github: {type: String},
});

module.exports = mongoose.model("users", userSchema);