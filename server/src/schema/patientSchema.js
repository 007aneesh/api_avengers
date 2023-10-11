const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    patientId: {
        type: Number,
        required: true
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
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: false
    }
})

const PatUser = mongoose.model('PATIENT',patientSchema);

module.exports = PatUser;