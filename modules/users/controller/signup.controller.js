const User = require("../model/user.model");
const bcrypt = require("bcrypt");
const { StatusCodes } = require("http-status-codes");

module.exports = async (req, res) => {
  try {
    const { username, email, password, phone, location } = req.body;

    const isExist = await User.findOne({ email });
    if (isExist) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ error: "user is already exist" });
    }

    bcrypt.hash(password, 8, async (err, hash) => {
      if (err) {
        return res.json({ err });
      }
      const user = await User.insertMany({
        username,
        email,
        password: hash,
        phone,
        location,
      });
      res
        .status(StatusCodes.CREATED)
        .json({ message: "register successfully", user });
    });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ error });
  }
};
