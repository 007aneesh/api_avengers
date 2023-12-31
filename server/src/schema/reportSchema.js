const mongoose = require("mongoose");

const reportSchema = mongoose.Schema({
    patientId: {
        type: String,
        required: false
    },
    aadharNumber: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    dataType: {
        type: String,
        required: true
    },
    signedBy: {
        type: String,
        required: true
    },
    orgName: {
        type: String,
        required: true
    },
    verified: {
        type: Boolean,
        required: false
    }
}, {timestamps: true})

const reportData = mongoose.model("REPORT", reportSchema);

module.exports = reportData;