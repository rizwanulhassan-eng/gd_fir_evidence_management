const mongoose = require("mongoose");

const investigationOfficerSchema = mongoose.Schema({
    nidNumber: {
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
      officerPoint:{
        type: Number,
        require: true,
      },
      thana: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Thana",
        require: true,
      },
      createdOn: {
        type: Date,
        default: Date.now,
      },
});

module.exports = mongoose.model("InvestigationOfficer", investigationOfficerSchema);