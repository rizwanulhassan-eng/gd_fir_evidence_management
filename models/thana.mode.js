const mongoose = require("mongoose");

const thanaSchema = mongoose.Schema({
  thanaCode: {
    type: String,
    require: true,
  },
  thanaName: {
    type: String,
    require: true,
  },
  thanaAddress: {
    type: String,
    require: true,
  }
});

module.exports = mongoose.model("Thana", thanaSchema);