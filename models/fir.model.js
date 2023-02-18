const mongoose = require("mongoose");

const firSchema = mongoose.Schema({
 userId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true
    },
    thanaId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Thana",
    require: true
    },
    firType: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "FIRType",
    require: true,
    },
    currentAddress: {
    type: String,
    require: true,
    },
    description: {
    type: String,
    require: true,
    },
    status:{
    type: String,
    require: true,
    },
    assignedOfficer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "InvestigationOfficer",
    require: false,
    },
    forensicOfficer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ForensicOfficer",
    require: false,
    },
    suspectInfo: {
    type: String,
    require: false,
    },
    result: {
    type: String,
    require: false,
    },
    createdOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("FIR", firSchema);