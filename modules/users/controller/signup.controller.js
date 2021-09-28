const User = require("../model/user.model");
const bcrypt = require("bcrypt");
const salt = process.env.SALT_ROUNDS;

module.exports = async (req, res) => {
  try {
    const { username, email, password, phone, location } = req.body;
    console.log(username, email, password, phone, location);
    console.log(process.env.SALT_ROUNDS);

    const isExist = await User.findOne({ email });
    if (isExist) {
      return res.json({ error: "user is already exist" });
    }

    bcrypt.hash(password, salt, async (err, hash) => {
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
      res.json({ message: "register successfully", user });
    });
  } catch (error) {
    res.json({ error });
  }
};
