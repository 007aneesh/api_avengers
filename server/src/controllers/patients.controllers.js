const PatUser = require('../schema/patientSchema');

async function getAllPatients(req, res) {
  const orgNameToFilter = req.query.orgName;
  const users = await PatUser.find({ orgName: orgNameToFilter });
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://api-avengers-frontend.vercel.app"
  );
  return res.status(200).json(users);
}

async function getPatientById(req, res) {
  const patientId = req.params.patientId;
  const patient = await PatUser.findOne({ _id: patientId });

  if (!patient) {
    return res.status(404).json({ message: "Patient not found" });
  }

  // Add the 'Access-Control-Allow-Origin' header
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://api-avengers-frontend.vercel.app"
  );

  return res.status(200).json(patient);
}


async function getPatientByIAadhar(req, res) {
  const aadhar = req.params.aadharNumber;

  const patient = await PatUser.findOne({ aadharNumber: aadhar });

  if (!patient) {
    return res.status(404).json({ message: "Patient not found" });
  }

  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://api-avengers-frontend.vercel.app"
  );

  return res.status(200).json(patient);
}

async function updatePatientById(req, res) {
  const patientId = req.params.patientId;
  const updates = req.body;
  try {
    // Use of findOneAndUpdate method to find and update the patient
    const patient = await PatUser.findOneAndUpdate(
      { _id: patientId },
      updates,
      { new: true } // To return the updated patient
    );

    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }

    res.setHeader(
      "Access-Control-Allow-Origin",
      "https://api-avengers-frontend.vercel.app"
    );

    return res.status(200).json(patient);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {
  getAllPatients,
  getPatientById,
  getPatientByIAadhar,
  updatePatientById,
};