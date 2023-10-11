const express = require("express");

// const { catchErrors } = require("../../handlers/errorHandlers");

const router = express.Router();

// import controllers
const patientsControllers = require("../../controllers/patients.controllers");

// //_________________________________ API for patients______________________
router.get("/getAllPatients", patientsControllers.getAllPatients);
router.get("/patient/:patientId", patientsControllers.getPatientById);
router.get("/patient/:aadhar", patientsControllers.getPatientByIAadhar);

module.exports = router;