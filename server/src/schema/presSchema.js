const mongoose = require("mongoose");

const presSchema = mongoose.Schema({
    patientId: {
        type: Number,
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
})

const presData = mongoose.model("PRESCRIPTION", presSchema);

module.exports = presData;