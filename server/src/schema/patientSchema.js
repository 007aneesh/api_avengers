const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const patientSchema = new mongoose.Schema(
  {
    patientId: {
      type: Number,
      required: false,
    },
    aadharNumber: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    guardianName: {
      type: String,
      required: true,
    },
    emergencyContact: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    contact: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    orgName: {
      type: [String],
      default: [],
    },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
    verified: {
      type: Boolean,
      required: false
    }
  },
  { timestamps: true }
);

patientSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});

patientSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({
      token: token,
    });
    await this.save();
    return token;
  } catch (err) {
    console.log("Error");
  }
};

const PatUser = mongoose.model("PATIENT", patientSchema);

module.exports = PatUser;
