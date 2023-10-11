const mongoose = require('mongoose');

const orgSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contactNo: {
        type: Number,
        required: true
    },
    secContact: {
        type: Number,
        required: true
    },
    password: {
        type: Number,
        required: true
    },
    cpassword: {
        type: Number,
        required: true
    },
    orgName: {
        type: String,
        required: true
    },
    registrationNo: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    pinCode: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    planSelected: {
        type: String,
        required: true
    }
})

const OrgUser = mongoose.model('ORGANISATION', orgSchema);

module.exports = OrgUser;   