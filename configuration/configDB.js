const mongoose = require("mongoose");
require("dotenv").config();
const connection = () => {
  return mongoose
    .connect(process.env.DB_HOST)
    .then((result) => {
      console.log("DB connected");
    })
    .catch((err) => {
      console.log("error", err);
    });
};

module.exports = connection;
