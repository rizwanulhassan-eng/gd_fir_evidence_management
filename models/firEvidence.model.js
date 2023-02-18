const mongoose = require("mongoose");

const firEvidenceSchema = mongoose.Schema({
  file: {
    type: String,
    require: true,
    },
    firId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "FIR",
        require: true,
    },
    uploadedBy:{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
    },
    createdOn: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model("FIREvidence", firEvidenceSchema);