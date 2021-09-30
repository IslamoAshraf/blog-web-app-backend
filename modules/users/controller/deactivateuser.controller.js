const User = require("../model/user.model");
const { StatusCodes } = require("http-status-codes");

module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    if (id !== req.user._id) {
      res.status(StatusCodes.BAD_REQUEST).json({ error: "not authorized" });
    }
    if (id === req.user._id) {
      const deactivateUser = await User.findByIdAndUpdate(
        { _id: req.user._id },
        [{ $set: { deactivated: { $not: "$deactivated" } } }]
      );
      res
        .status(StatusCodes.OK)
        .json({ message: "deactivated", deactivateUser });
    }
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ error });
  }
};
