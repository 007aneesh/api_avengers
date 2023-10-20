const OrgUser = require("../schema/orgSchema");

async function getOrganisationById(req, res) {
  const registrationNo = req.params.registrationNo;
  const org = await OrgUser.findOne({ registrationNo: registrationNo });

  if (!org) {
    return res.status(404).json({ message: "Organisation not found" });
  }

  // Add the 'Access-Control-Allow-Origin' header
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://api-avengers-frontend.vercel.app"
  );

  return res.status(200).json(org);
}

module.exports = { getOrganisationById };
