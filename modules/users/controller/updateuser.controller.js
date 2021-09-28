const User = require("../model/user.model");
const { StatusCodes } = require("http-status-codes");

module.exports = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const { username, email, phone, location } = req.body;
  console.log(username, email, phone, location);
  try {
    if (id !== req.user._id) {
      res.status(StatusCodes.BAD_REQUEST).json({ error: "not authorized" });
    }
    if (id === req.user._id) {
      const updatedUser = await User.updateOne(
        { _id: req.user._id },
        { username, email, phone, location }
      );
      res.status(StatusCodes.OK).json({ message: "success", updatedUser });
    }
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ error });
  }
};
