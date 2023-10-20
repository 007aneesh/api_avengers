const express = require("express");

// const { catchErrors } = require("../../handlers/errorHandlers");

const router = express.Router();

// import controllers
const patientsControllers = require("../../controllers/patients.controllers");
const reportsControllers = require("../../controllers/reports.controllers");
const organisationControllers = require("../../controllers/organisation.controllers");
// //_________________________________ API for patients______________________
router.get("/getAllPatients", patientsControllers.getAllPatients);
router.get("/patient/:patientId", patientsControllers.getPatientById);
router.get(
  "/patientbyaadhar/:aadharNumber",
  patientsControllers.getPatientByIAadhar
);
router.patch("/patient/:patientId", patientsControllers.updatePatientById);

// //_________________________________ API for reports______________________

router.post("/getAllReports", reportsControllers.getAllReports);

// //_________________________________ API for org______________________

router.get(
  "/admin/:registrationNo",
  organisationControllers.getOrganisationById
);

module.exports = router;
