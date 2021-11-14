const User = require("../model/user.model");
const { StatusCodes } = require("http-status-codes");

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const foundedUser = await User.findById(id);
    if (!foundedUser) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "user is not founded" });
    }

    if (req.user._id !== id) {
      return res.json({ message: "you are not authorized" });
    }

    const deltedUser = await User.findByIdAndDelete(id);
    res.status(StatusCodes.OK).json({ message: "jh", deltedUser });
  } catch (error) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "please enter a valid id " });
  }
};

module.exports = deleteUser;
