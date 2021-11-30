const User = require("../model/user.model");
const { StatusCodes } = require("http-status-codes");

module.exports = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit)||5;
  const users = await User.find({})
    .select("-password")
    .limit(limit)
    .skip((page - 1) * limit);
  res.status(StatusCodes.OK).json({ message: "success", data: users });
};
