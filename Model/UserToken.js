const mongoose = require("mongoose");

const userTokenSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  accessToken: {
    type: String,
    required: true,
  },
  refreshToken: {
    type: String,
    required: true,
  },
  idToken: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("UserToken", userTokenSchema);
