const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
  codeVerifier: {
    type: String,
    required: false,
  },
  codeChallenge: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("User", userSchema);
