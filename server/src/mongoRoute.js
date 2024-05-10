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
res.setHeader(
  "Access-Control-Allow-Origin",
  // "https://api-avengers-frontend.vercel.app"
  "*"
);
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
  res.setHeader(
    "Access-Control-Allow-Origin",
    // "https://api-avengers-frontend.vercel.app"
  "*"
  );
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

      if (!isMatch) {
        res.status(400).json({ error: "Invalid Credentials" });
      } else {
        res.json({
          message: "Patient login successfully",
          patientId: patientLogin._id,
          token: token,
        });
      }
    } else {
      res.status(400).json({ message: "User not found!!" });
    }
  } catch (err) {
    console.log(err);
  }
});

// Organisation Registration Route

router.post("/orgRegister", async (req, res) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    // "https://api-avengers-frontend.vercel.app"
  "*"
  );
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
          registrationNo: orgRegister.registrationNo,
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
  res.setHeader(
    "Access-Control-Allow-Origin",
    // "https://api-avengers-frontend.vercel.app"
  "*"
  );
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
        res.json({
          message: "Organisation login successfully",
          data: organisationLogin,
        });
      }
    } else {
      res.status(400).json({ message: "ORG not found!!" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/dashboard/patient/:patientId", authenticate, (req, res) => {
  res.send(req.params.patientId);
});

module.exports = router;

// Adding Report

router.post("/addReport", async (req, res) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    // "https://api-avengers-frontend.vercel.app"
  "*"
  );
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
    !image ||
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

    const patient = await PatUser.findOne({ aadharNumber });

    // if (!patient) {
    //   return res.status(404).json({ error: "Patient not found" });
    // }

    // Check if the orgName is already present in the patient's orgName array
    if (patient.orgName.includes(orgName)) {
    } else {
      patient.orgName.push(orgName);
      await patient.save();
    }

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
