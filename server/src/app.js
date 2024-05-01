const express = require("express");

const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const appApi = require('./routes/appRoutes/appAPI');



// Middleware
// app.use(
//   cors({
//     origin: ["https://api-avengers-frontend.vercel.app"],
//     methods: ["POST", "GET"],
//     credentials: true,
//   })
// );

app.use(
  cors({
    origin: "*", 
    methods: ["POST", "GET", "PUT", "PATCH", "DELETE"],
    credentials: true, 
    optionsSuccessStatus: 204, 
  })
);
app.use(express.json());
app.use(bodyParser.json());

app.use(appApi);

// app.use((err, req, res, next) => {
//   res.status(500).json({ error: "Internal Server Error" });
// });

module.exports = app;
