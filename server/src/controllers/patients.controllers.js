const PatUser = require('../schema/patientSchema');

async function getAllPatients(req, res){
    const users = await PatUser.find();
    return res.status(200).json(users);
}

async function getPatientById(req, res) {
  const patientId = req.params.patientId;
  const patient = await PatUser.findOne({ patientId: patientId });

  if (!patient) {
    return res.status(404).json({ message: "Patient not found" });
  }

  return res.status(200).json(patient);
}

async function getPatientByIAadhar(req, res) {
  const aadhar = req.params.aadhar;

  const patient = await PatUser.findOne({ aadharNumber: aadhar });

  if (!patient) {
    return res.status(404).json({ message: "Patient not found" });
  }

  return res.status(200).json(patient);
}


module.exports = {
  getAllPatients,
  getPatientById,
  getPatientByIAadhar,
};