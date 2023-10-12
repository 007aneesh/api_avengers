const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
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
        type: String,
        required: true
    },
    cpassword: {
        type: String,
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

orgSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.cpassword = await bcrypt.hash(this.cpassword, 12);
  }
  next();
});

const OrgUser = mongoose.model('ORGANISATION', orgSchema);

module.exports = OrgUser;   