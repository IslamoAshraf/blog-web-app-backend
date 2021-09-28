const User = require("../model/user.model");
const bcrypt = require("bcrypt");
const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "incorrect passowrd or email" });
    }

    const isMatchedPassword = await bcrypt.compare(password, user.password);

    if (!isMatchedPassword) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "incorrect passowrd or email" });
    }

    if (isMatchedPassword) {
      const token = jwt.sign({ _id: user._id, role: user.role }, "warmcold", {
        expiresIn: "24h",
      });
      if (token) {
        res.status(StatusCodes.OK).json({
          message: "success",
          token,
          data: { _id: user._id, email: user.email, role: user.role },
        });
      }
    }
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({ error });
  }
};
