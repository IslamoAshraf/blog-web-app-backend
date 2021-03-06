const User = require("../model/user.model");
const bcrypt = require("bcrypt");
const { StatusCodes } = require("http-status-codes");
const mailer = require("../../../shared/nodemailer");

module.exports = async (req, res) => {
  try {
    const { username, email, password, phone, location } = req.body;
    //check if user exist
    const isExist = await User.findOne({ email });
    if (isExist) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ error: "user is already exist" });
    }
    //hash password
    bcrypt.hash(password, 8, async (err, hash) => {
      if (err) {
        return res.json({ err });
      }
      //check if server sent the message
      try {
         await mailer(email, username);
        const user = await User.insertMany({
          username,
          email,
          password: hash,
          phone,
          location,
        });
        return res
          .status(StatusCodes.CREATED)
          .json({ message: "register successfully", user });
      } catch (error) {
        return res.status(StatusCodes.BAD_REQUEST).json({ error });
      }
    });
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({ error });
  }
};
