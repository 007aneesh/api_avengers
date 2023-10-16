const jwt = require("jsonwebtoken");
const Patient = require("../schema/patientSchema");


const authenticate = async (req, res, next) => {
    try {
        const token = req.cookies.jwtoken;
        const verifyToken = jwt.verfify(token, process.env.SECRET_KEY);   
        
        const rootUser = await User.findOne({_id: verifyToken._id, "tokens.token": token});

        if(!rootUser){
            throw new Error('User not Found!!');
        }else{
            req.token = token;
            req.rootUser = rootUser;
            req.userID= rootUser._id
        }

        next();
    } catch (error) {
        res.status(401).send("Unauthorise: No Token Provided");
    }
}

module.exports = authenticate;