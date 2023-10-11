const patients = require('../models/patients.model');

function getAllPatients(req, res){
    return res.status(200).json(patients);
}

function getPatientById(req, res) {
  const patientId = req.params.patientId; 
  const patient = patients.find((p) => p.patientId.toString() === patientId);

  if (!patient) {
    return res.status(404).json({ message: "Patient not found" });
  }

  return res.status(200).json(patient);
}

function getPatientByIAadhar(req, res) {
  const aadhar = req.params.aadhar;
  const patient = patients.find((p) => p.aadharNumber.toString() === aadhar);

  if (!patient) {
    return res.status(404).json({ message: "Patient not found" });
  }

  return res.status(200).json(patient);
}


module.exports = {
    getAllPatients,
    getPatientById
}