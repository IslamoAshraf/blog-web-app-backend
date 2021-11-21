const User = require("../model/user.model");
var jwt = require("jsonwebtoken");
const { StatusCodes } = require("http-status-codes");

const verifyUser = async (req, res) => {
  const { token } = req.params;
  const decoded = jwt.verify(token, process.env.TOKEN_VERIFY_KEY);
  console.log(decoded);
  const email = decoded.email;
  const foundedUser = await User.findOne({ email });
  if (!foundedUser) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: "user not found" });
  }
  const verifyUser = await User.findOneAndUpdate(
    { email },
    { isVerified: true },
    { new: true }
  );
  res
    .status(StatusCodes.OK)
    .json({ message: "verified successfully", verifyUser });
};
module.exports = verifyUser;
