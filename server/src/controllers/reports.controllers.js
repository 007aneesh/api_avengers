const Report = require("../schema/reportSchema");

async function getAllReports(req, res){
    const {aadharNumber} = req.body;
    const reports = await Report.find({
        aadharNumber: aadharNumber
    });
    if(reports){
        res.send(reports);
    }else{
        res.status(401).send('No Reports Found');
    }
}

module.exports = {
    getAllReports,
}