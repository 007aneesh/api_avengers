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

const allowedOrigins = ["https://api-avengers-frontend.vercel.app"];

// Configure the cors middleware with the desired options
app.use(
  cors({
    origin: function (origin, callback) {
      // Check if the origin is in the list of allowed origins
      if (allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["POST", "GET", "PATCH"],
    credentials: true,
  })
);

app.use(express.json());
app.use(bodyParser.json());

app.use(appApi);

// app.use((err, req, res, next) => {
//   res.status(500).json({ error: "Internal Server Error" });
// });

module.exports = app;