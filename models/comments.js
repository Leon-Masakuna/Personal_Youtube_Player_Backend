const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
    message: {type: String, required: true},
    time: {type: String},
    video: {type: String},
    user: {type: String, required: true},
    subComments : {type: Array}
})

module.exports = mongoose.model("Comments", commentSchema);