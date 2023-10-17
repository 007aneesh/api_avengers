const express = require("express");
const router = express.Router();
const PatUser = require("./schema/patientSchema");
const OrgUser = require("./schema/orgSchema");
const Report = require("./schema/reportSchema");
const bcrypt = require("bcryptjs");
const authenticate = require("./middlewares/authenticate");
// patient register route

router.post("/patRegister", async (req, res) => {
  const {
    patientId,
    aadharNumber,
    email,
    guardianName,
    emergencyContact,
    name,
    gender,
    contact,
    password,
    image,
  } = req.body;

  if (
    !aadharNumber ||
    !email ||
    !guardianName ||
    !emergencyContact ||
    !name ||
    !gender ||
    !contact ||
    !password
  ) {
    return res.status(422).json({ error: "plzz fill the fields properly" });
  }

  try {
    const patientExists = await PatUser.findOne({ aadharNumber: aadharNumber });

    if (patientExists) {
      return res.status(422).json({ error: "Aadhar already exists" });
    }

    const patUser = new PatUser({
      patientId,
      aadharNumber,
      email,
      guardianName,
      emergencyContact,
      name,
      gender,
      contact,
      password,
      image,
    });

    const patRegister = await patUser.save();

    if (patRegister) {
      res.status(201).json({ message: "patient register successfully" });
    } else {
      res.status(500).json({ error: "failed to register" });
    }
  } catch (err) {
    console.log(err);
  }
});

// patient login route

router.post("/patLogin", async (req, res) => {
  try {
    let token;
    const { aadharNumber, password } = req.body;

    if (!aadharNumber || !password) {
      return res.status(400).json({ error: "plz fill data" });
    }

    const patientLogin = await PatUser.findOne({ aadharNumber: aadharNumber });

    if (patientLogin) {
      const isMatch = await bcrypt.compare(password, patientLogin.password);

      token = await patientLogin.generateAuthToken();

      const eightHours = 8 * 60 * 60 * 1000;
      const expirationTime = new Date(Date.now() + eightHours);

      res.cookie("jwtoken", token, {
        expires: expirationTime,
        httpOnly: true,
      });

      if (!isMatch) {
        res.status(400).json({ error: "Invalid Credentials" });
      } else {
        res.json({
          message: "Patient login successfully",
          patientId: patientLogin._id,
        });
      }
    } else {
      res.json({ message: "User not found!!" });
    }
  } catch (err) {
    console.log(err);
  }
});

// Organisation Registration Route

router.post("/orgRegister", async (req, res) => {
  const {
    userName,
    email,
    contactNo,
    secContact,
    password,
    cpassword,
    orgName,
    registrationNo,
    address,
    pinCode,
    city,
    state,
    planSelected,
  } = req.body;

  if (
    !userName ||
    !email ||
    !contactNo ||
    !secContact ||
    !password ||
    !cpassword ||
    !orgName ||
    !registrationNo ||
    !address ||
    !pinCode ||
    !city ||
    !state ||
    !planSelected
  ) {
    return res.status(422).json({ error: "plzz fill the fields properly" });
  }

  try {
    const orgExists = await OrgUser.findOne({ registrationNo: registrationNo });

    if (orgExists) {
      return res
        .status(422)
        .json({ error: "registration Number already exists" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "password are not matching" });
    } else {
      const orgUser = new OrgUser({
        userName,
        email,
        contactNo,
        secContact,
        password,
        cpassword,
        orgName,
        registrationNo,
        address,
        pinCode,
        city,
        state,
        planSelected,
      });

      const orgRegister = await orgUser.save();

      if (orgRegister) {
        res.status(201).json({
          message: "organisation register successfully",
          registrationNo: orgExists.registrationNo,
        });
      } else {
        res.status(500).json({ error: "failed to register" });
      }
    }
  } catch (err) {
    console.log(err);
  }
});

// Organisation Login Route

router.post("/orgLogin", async (req, res) => {
  try {
    const { registrationNo, password } = req.body;

    const organisationLogin = await OrgUser.findOne({
      registrationNo: registrationNo,
    });

    if (organisationLogin) {
      const isMatch = await bcrypt.compare(
        password,
        organisationLogin.password
      );

      if (!isMatch) {
        res.status(400).json({ error: "Invalid Credentials" });
      } else {
        res.json({ message: "Organisation login successfully" });
      }
    } else {
      res.json({ message: "ORG not found!!" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/dashboard/patient/:patientId", authenticate, (req, res) => {
  res.send(req.rootUser);
});

module.exports = router;


// Adding Report

router.post("/addReport", async (req, res) => {
  const {
    patientId,
    aadharNumber,
    image,
    description,
    dataType,
    signedBy,
    orgName,

  } = req.body;

  if (
    !patientId ||
    !aadharNumber ||
    !description ||
    !dataType ||
    !signedBy ||
    !orgName
  ) {
    return res.status(422).json({ error: "plzz fill the fields properly" });
  }

  try {
    // const imgExists = await Report.findOne({ image: image });

    // if (imgExists) {
    //   return res
    //     .status(422)
    //     .json({ error: "Same report already Exists" });
    // }
    // else {
      const report = new Report({
        patientId,
        aadharNumber,
        image,
        description,
        dataType,
        signedBy,
        orgName,
      });

      const addReport = await report.save();

      if (addReport) {
        res.status(201).json({
          message: "report added successfully",
        });
      } else {
        res.status(500).json({ error: "failed to add report" });
      }
    // }
  } catch (err) {
    console.log(err);
  }
});
