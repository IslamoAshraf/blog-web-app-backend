const User = require("../model/user.model");
const { StatusCodes } = require("http-status-codes");

module.exports = async (req, res) => {
  const users = await User.find({}).select("-password");
  res.status(StatusCodes.OK).json({ message: "success", data: users });
};
