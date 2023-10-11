const express = require("express");

const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

const appApi = require('./routes/appRoutes/appAPI');

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use(appApi);

// app.use((err, req, res, next) => {
//   res.status(500).json({ error: "Internal Server Error" });
// });

module.exports = app;