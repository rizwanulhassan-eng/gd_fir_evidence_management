const mongoose = require("mongoose");

const forensicOfficerSchema = mongoose.Schema({
    id: {
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
        officerStatus: {
        type: String,
        require: true,
      },
      officerRank:{
        type: String,
        require: true,
      },
      createdOn: {
        type: Date,
        default: Date.now,
      },
});

module.exports = mongoose.model("ForensicOfficer", forensicOfficerSchema);