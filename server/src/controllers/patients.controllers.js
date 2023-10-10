const patients = require('../models/patients.model');

function getAllPatients(req, res){
    return res.status(200).json(patients);
}

module.exports = {
    getAllPatients
}