const User = require("../model/user.model");
const { StatusCodes } = require("http-status-codes");
const bcrypt = require("bcrypt");

module.exports = async (req, res) => {
  const { id } = req.params;
  const { oldpassword, newpassword } = req.body;

  try {
    if (id !== req.user._id) {
      return res.status(StatusCodes.BAD_REQUEST).json({ error: "incorrect" });
    }

    const user = await User.findOne({ id: req.user_id });
    const isMatchedPassword = await bcrypt.compare(oldpassword, user.password);

    if (isMatchedPassword) {
      bcrypt.hash(newpassword, 8, async (err, hash) => {
        if (err) {
          return res.json({ err });
        }
        const updatedUserPW = await User.updateOne(
          { _id: req.user._id },
          { password: hash }
        );
        res
          .status(StatusCodes.CREATED)
          .json({ message: "password changed", updatedUserPW });
      });
    }

    if (!isMatchedPassword) {
      return res.status(StatusCodes.BAD_REQUEST).json({ error: "incorrect" });
    }
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({ error: "error" });
  }
};
