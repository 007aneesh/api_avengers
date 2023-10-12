const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const patientSchema = new mongoose.Schema({
    patientId: {
        type: Number,
        required: false
    },
    aadharNumber: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    guardianName: {
        type: String,
        required: true
    },
    emergencyContact: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    }
})

patientSchema.pre("save", async function (next) {
  if (this.isModified("aadharNumber")) {
    this.aadharNumber = await bcrypt.hash(this.aadharNumber, 12);
  }
  next();
});


const PatUser = mongoose.model('PATIENT',patientSchema);

module.exports = PatUser;

