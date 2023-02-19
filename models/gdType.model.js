const mongoose = require("mongoose");

const gdTypeSchema = mongoose.Schema({
  type: {
    type: String,
    require: true,
  }
});

module.exports = mongoose.model("GDType", gdTypeSchema);