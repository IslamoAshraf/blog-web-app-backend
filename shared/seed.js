const User = require("../modules/users/model/user.model");
const bcrypt = require("bcrypt");
const seed = () => {
    bcrypt.hash("h", 8, async (err, hash) => {
        try {
          for (let i = 0; i < 100; i++) {
            await User.insertMany({
              username: `test ${i}`,
              email: `test ${i}`,
              phone: 1,
              location: `cairo ${i}`,
              role: "user",
              deactivated: false,
              blocked: false,
              password: hash,
              isVerified: true,
            });
            console.log(hash);
          }
        } catch (error) {
          console.log(error);
        }
      });
} 

module.exports = seed;
