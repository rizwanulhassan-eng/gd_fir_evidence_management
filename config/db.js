const mongoose = require("mongoose");
const config = require("./config");

const dbURL = config.db.url;

mongoose
  .connect(dbURL)
  .then(() => {
    console.log("MongoDB is connected.");
  })
  .catch((error) => {
    console.log("MongoDB connection error: ", error);
    process.exit(1);
});