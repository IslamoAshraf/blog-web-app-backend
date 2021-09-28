const User = require("../model/user.model");
const bcrypt = require("bcrypt");

module.exports = async (req, res) => {
  try {
    const { username, email, password, phone, location } = req.body;
    console.log(username, email, password, phone, location);

    const isExist = await User.findOne({ email });
    if (isExist) {
      return res.json({ error: "user is already exist" });
    }

    bcrypt.hash(password, 8, async (err, hash) => {
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
