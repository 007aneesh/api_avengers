const jwt = require("jsonwebtoken");
const Patient = require("../schema/patientSchema");

const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwtoken;

    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

    const rootUser = await Patient.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });

    if (!rootUser) {
      throw new Error("User not Found!!");
    } else {
      req.token = token;
      req.rootUser = rootUser;
      req.userID = rootUser._id;
    }

    next();
  } catch (error) {
    res.status(401).send("Unauthorise: No Token Provided");
  }
};

module.exports = authenticate;
