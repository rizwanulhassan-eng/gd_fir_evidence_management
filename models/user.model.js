const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  nidNumber: {
    type: String,
    require: true,
  },
  faceRecognition: {
    type: String,
    require: true,
  },
  phoneNumber: {
    type: String,
    require: true,
  },
  otp: {
    type: String,
    require: false,
  },
    userStatus: {
    type: String,
    require: true,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);