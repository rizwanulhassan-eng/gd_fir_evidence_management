const mongoose = require("mongoose");

const firTypeSchema = mongoose.Schema({
  type: {
    type: String,
    require: true,
  }
});

module.exports = mongoose.model("FIRType", firTypeSchema);