const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  imageUrl: { type: String, required: true },
  linkedin: {
    type: String,
    default: "https://www.linkedin.com/in/l%C3%A9on-masakuna-mfeng-130303201/",
  },
  github: { type: String, default: "https://github.com/Leon-Masakuna" },
});

module.exports = mongoose.model("Users", userSchema);
