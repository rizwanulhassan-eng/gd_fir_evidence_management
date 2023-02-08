const mongoose = require("mongoose");

const gdSchema = mongoose.Schema({
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
    gdType: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "GDType",
    require: true,
    },
    currentAddress: {
    type: String,
    require: true,
    },
    mediaGD: {
    type: String,
    require: false,
    },
    description: {
    type: String,
    require: true,
    },
    status:{
    type: String,
    require: true,
    },
    createdOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("GD", gdSchema);