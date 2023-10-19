const http = require("http");
const app = require("./app");
const mongoose = require("mongoose");

const mongoRoute = require("./mongoRoute");


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

app.use(mongoRoute);


// create server
const server = http.createServer(app);
// Start the server
const port = process.env.PORT;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
