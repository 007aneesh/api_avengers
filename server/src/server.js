const http = require("http");
const app = require("./app");
const mongoose = require("mongoose");

//require dotenv
require("dotenv").config();

// MongoDB connection
const uri = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB successfully!");
});

// calling patientSchema
const PatUser = require("./schema/patientSchema");

// calling orgSchema
const orgUser = require("./schema/orgSchema");
const OrgUser = require("./schema/orgSchema");

app.get("/", (req, res) => {
  res.send(`Hello from the server`);
});

// patient register route

app.post("/patRegister", async (req, res) => {
  const {
    patientId,
    aadharNumber,
    email,
    guardianName,
    emergencyContact,
    name,
    gender,
    contact,
    password,
    image,
  } = req.body;

  if (
    !patientId ||
    !aadharNumber ||
    !email ||
    !guardianName ||
    !emergencyContact ||
    !name ||
    !gender ||
    !contact ||
    !password
  ) {
    return res.status(422).json({ error: "plzz fill the fields properly" });
  }

  try {
    const patientExists = await PatUser.findOne({ aadharNumber: aadharNumber });

    if (patientExists) {
      return res.status(422).json({ error: "Aadhar already exists" });
    }

    const patUser = new PatUser({
      patientId,
      aadharNumber,
      email,
      guardianName,
      emergencyContact,
      name,
      gender,
      contact,
      password,
      image,
    });

    

    const patRegister = await patUser.save();

    if (patRegister) {
      res.status(201).json({ message: "patient register successfully" });
    } else {
      res.status(500).json({ error: "failed to register" });
    }
  } catch (err) {
    console.log(err);
  }
});

// patient login route

app.post("/patLogin", async (req, res) => {
  try {
    const { aadharNumber, password } = req.body;

    if (!aadharNumber || !password) {
      return res.status(400).json({ error: "plz fill data" });
    }

    const patientLogin = await PatUser.findOne({ aadharNumber: aadharNumber });

    if (!patientLogin) {
      res.status(400).json({ error: "some error occured" });
    } else {
      res.json({ message: "patient login successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

// Organisation Registration Route

app.post("/orgRegister", async (req, res) => {
  const {
    userName,
    email,
    contactNo,
    secContact,
    password,
    cpassword,
    orgName,
    registrationNo,
    address,
    pinCode,
    city,
    state,
    planSelected,
  } = req.body;

  if (
    !userName ||
    !email ||
    !contactNo ||
    !secContact ||
    !password ||
    !cpassword ||
    !orgName ||
    !registrationNo ||
    !address ||
    !pinCode ||
    !city ||
    !state ||
    !planSelected
  ) {
    return res.status(422).json({ error: "plzz fill the fields properly" });
  }

  try {
    const orgExists = await OrgUser.findOne({ registrationNo: registrationNo });

    if (orgExists) {
      return res
        .status(422)
        .json({ error: "registration Number already exists" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "password are not matching" });
    } else {
      const orgUser = new OrgUser({
        userName,
        email,
        contactNo,
        secContact,
        password,
        cpassword,
        orgName,
        registrationNo,
        address,
        pinCode,
        city,
        state,
        planSelected,
      });

      const orgRegister = await orgUser.save();

      if (orgRegister) {
        res.status(201).json({ message: "organisation register successfully" });
      } else {
        res.status(500).json({ error: "failed to register" });
      }
    }
  } catch (err) {
    console.log(err);
  }
});

// Organisation Login Route

app.post("/orgLogin", async (req, res) => {
  try {
    const { registrationNo, password } = req.body;

    if (!registrationNo || !password) {
      return res.status(400).json({ error: "plz fill data" });
    }

    const organisationLogin = await OrgUser.findOne({
      registrationNo: registrationNo,
    });

    if (!organisationLogin) {
      res.status(400).json({ error: "some error occured" });
    } else {
      res.json({ message: "Organisation login successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

// create server
const server = http.createServer(app);
// Start the server
const port = process.env.PORT || 8000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
