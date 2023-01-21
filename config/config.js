require("dotenv").config();

const dev = {
  app: {
    port: process.env.PORT || 3100,
  },
  db: {
    url: process.env.DB || "mongodb://localhost:27017/myDB",
  },
};

module.exports = dev;